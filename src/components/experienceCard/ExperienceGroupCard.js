import React, {useState, useRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

function DescBullets({descBullets, isDark}) {
  if (!descBullets || !descBullets.length) {
    return null;
  }
  return (
    <ul>
      {descBullets.map((item, i) => (
        <li
          key={i}
          className={
            isDark
              ? "experience-text-bullet dark-mode-text"
              : "experience-text-bullet"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function EmploymentBadges({employmentType, engagement}) {
  return (
    <>
      {employmentType && (
        <span
          className={`employment-type-badge employment-type-${employmentType
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {employmentType}
        </span>
      )}
      {engagement && (
        <span
          className={`engagement-badge engagement-${engagement
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {engagement}
        </span>
      )}
    </>
  );
}

export default function ExperienceGroupCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = useRef(null);
  const logoLabel = (cardInfo.company || "?").trim().charAt(0);

  function getColorArrays() {
    try {
      if (!imgRef.current || imgRef.current.naturalWidth === 0) {
        setColorArrays([55, 59, 68]);
        return;
      }
      const colorThief = new ColorThief();
      setColorArrays(colorThief.getColor(imgRef.current));
    } catch (e) {
      console.warn("ColorThief failed to extract color:", e);
      setColorArrays([55, 59, 68]);
    }
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="timeline-logo-wrap">
        {cardInfo.companylogo ? (
          <img
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={() => getColorArrays()}
          />
        ) : (
          <div
            className="experience-roundedimg experience-roundedimg-placeholder"
            aria-hidden="true"
          >
            {logoLabel}
          </div>
        )}
        <div
          className="timeline-dot"
          style={{background: rgb(colorArrays) || "#6c63ff"}}
        />
      </div>
      <div className="experience-text-details">
        <div className="timeline-header">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
          <h5
            className={
              isDark
                ? "experience-text-date dark-mode-text"
                : "experience-text-date"
            }
          >
            {cardInfo.date}
          </h5>
        </div>
        {cardInfo.companyTagline && (
          <p
            className={
              isDark
                ? "experience-text-tagline dark-mode-text"
                : "experience-text-tagline"
            }
          >
            {cardInfo.companyTagline}
          </p>
        )}
        {cardInfo.regionalScope && (
          <p
            className={
              isDark
                ? "experience-text-regional-scope dark-mode-text"
                : "experience-text-regional-scope"
            }
          >
            {cardInfo.regionalScope}
          </p>
        )}
        {cardInfo.roles.map((role, i) => (
          <div className="experience-role-block" key={i}>
            <div className="experience-role-block-header">
              <h5
                className={
                  isDark
                    ? "experience-text-role-sub dark-mode-text"
                    : "experience-text-role-sub"
                }
              >
                {role.role}
              </h5>
              <h5
                className={
                  isDark
                    ? "experience-text-date-sub dark-mode-text"
                    : "experience-text-date-sub"
                }
              >
                {role.date}
              </h5>
            </div>
            <div className="experience-role-row">
              <EmploymentBadges
                employmentType={role.employmentType}
                engagement={role.engagement}
              />
            </div>
            <p
              className={
                isDark
                  ? "experience-text-desc experience-text-desc-role dark-mode-text"
                  : "experience-text-desc experience-text-desc-role"
              }
            >
              {role.desc}
            </p>
            <DescBullets descBullets={role.descBullets} isDark={isDark} />
          </div>
        ))}
      </div>
    </div>
  );
}
