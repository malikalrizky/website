const {formatJobDateRange} = require("./formatJobDates");

function formatCompanyDateRange(roles) {
  if (!roles.length) {
    return "";
  }
  let earliestStart = roles[0].startMonth;
  let latestEnd = roles[0].endMonth;
  let hasPresent = roles[0].endMonth == null;

  for (const role of roles) {
    if (role.startMonth && role.startMonth < earliestStart) {
      earliestStart = role.startMonth;
    }
    if (role.endMonth == null) {
      hasPresent = true;
    } else if (
      !hasPresent &&
      (latestEnd == null || role.endMonth > latestEnd)
    ) {
      latestEnd = role.endMonth;
    }
  }

  return formatJobDateRange(earliestStart, hasPresent ? null : latestEnd);
}

function pickCompanyField(roles, field) {
  for (const role of roles) {
    if (role[field]) {
      return role[field];
    }
  }
  return undefined;
}

function groupExperience(experience) {
  const consumedGroups = new Set();
  const result = [];

  for (let i = 0; i < experience.length; i++) {
    const job = experience[i];

    if (!job.group) {
      result.push({kind: "single", job});
      continue;
    }

    const groupId = job.group;
    if (consumedGroups.has(groupId)) {
      continue;
    }
    consumedGroups.add(groupId);

    const members = experience
      .map((entry, index) => ({entry, index}))
      .filter(({entry}) => entry.group === groupId)
      .sort((a, b) => a.index - b.index)
      .map(({entry}) => entry);

    if (members.length === 1) {
      console.warn(
        `[groupExperience] group "${groupId}" has only one job; consider removing group.`
      );
    }

    const companies = new Set(members.map(m => m.company));
    if (companies.size > 1) {
      console.warn(
        `[groupExperience] group "${groupId}" mixes companies: ${[
          ...companies
        ].join(", ")}`
      );
    }

    result.push({
      kind: "group",
      groupId,
      company: members[0].company,
      roles: members
    });
  }

  return result;
}

module.exports = {
  groupExperience,
  formatCompanyDateRange,
  pickCompanyField
};
