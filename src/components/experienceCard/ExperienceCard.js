import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div className="timeline-logo-wrap">
        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
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
        <div className="experience-role-row">
          <h5
            className={
              isDark
                ? "experience-text-role dark-mode-text"
                : "experience-text-role"
            }
          >
            {cardInfo.role}
          </h5>
          {cardInfo.employmentType && (
            <span
              className={`employment-type-badge employment-type-${cardInfo.employmentType
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {cardInfo.employmentType}
            </span>
          )}
        </div>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
