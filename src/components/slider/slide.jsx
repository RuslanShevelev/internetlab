import React from "react";
import styles from "./slider.module.scss";

export function Slide({ data: { src, name, city, review } }) {
  return (
    <div className={styles.slide}>
      <div className={styles.slide__content}>
        <div className={styles.slide__author}>
          <img
            src={
              src
                ? src
                : "https://s3-alpha-sig.figma.com/img/b16f/c766/088d382ed0b689cf96b415edbf92f1b3?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvmUgI8R3vYbVLnlri05-F708zjWr4OyzauVbX-~9wNZUvFvDD617ErNHpzjlHqOue78WWr9XMQHQVwa4m8SgaQxU0NxuorOxusMk562gvosvrIi8vo5ELtMKk3XPaLz-yi1buYsEQfVNjayuUpPNGUIbvF48eIZY8xsowoLL4jhEN2x92KkSLoT1Pi9Bwi5CYkcOepNhrBP9Jl45o45mUeUKE9LSNrZt~rxWe~dQdny8nbwbBXwgb1vuXTgAP5pCMmJwFgMAP1gwyryMKwBVJQ3vN2gnNFQCUs6OGvILwjKqkWRL2iVN-Wbm8PsSnM-UcpY4wGHa9-VFYDjr-TFrg__"
            }
            alt={src}
            className={styles.slide__image}
          />
          <div>
            <h4 title={styles.slide__name}>{name}</h4>
            <p title={styles.slide__city}>{city}</p>
          </div>
        </div>
        <div className={styles.slide__review}>{review}</div>
      </div>
    </div>
  );
}
