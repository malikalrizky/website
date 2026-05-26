import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import ExperienceGroupCard from "../../components/experienceCard/ExperienceGroupCard";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <div className="experience-fade-in">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  if (card.kind === "group") {
                    return (
                      <ExperienceGroupCard
                        key={i}
                        isDark={isDark}
                        cardInfo={card}
                      />
                    );
                  }
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        companyTagline: card.companyTagline,
                        regionalScope: card.regionalScope,
                        descBullets: card.descBullets,
                        employmentType: card.employmentType,
                        engagement: card.engagement,
                        clients: card.clients
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
