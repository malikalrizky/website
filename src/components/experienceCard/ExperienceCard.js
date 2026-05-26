import React, {useState, useRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = useRef(null);
  const logoLabel = (cardInfo.company || cardInfo.role || "?").trim().charAt(0);

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

  const allBullets = [
    cardInfo.regionalScope,
    ...(cardInfo.descBullets || [])
  ].filter(Boolean);

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
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
        ))
      : null;
  };

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
          {cardInfo.engagement && (
            <span
              className={`engagement-badge engagement-${cardInfo.engagement
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {cardInfo.engagement}
            </span>
          )}
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
        <p
          className={
            isDark
              ? "experience-text-desc dark-mode-text"
              : "experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={allBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
