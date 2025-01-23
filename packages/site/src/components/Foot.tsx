import githubLogo from "~/assets/github.png";
import { useEffect, useState } from "react";

const LastUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState('...');
  useEffect(() => setLastUpdated(
    new Date(document.lastModified)
      // TODO: i18n & l10n
      .toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
  ));

  return <div className="footer-box left">
    <p>Last updated on <span id="last-updated">{lastUpdated}</span> by <a
        href="https://twitter.com/tj_keel"
        style={{color: "white", textDecoration: "underline"}}
        target="_blank"
        rel="noopener noreferrer"
      >Tjk</a>
    </p>
  </div>
}

export const Foot = () => 
  <footer className="footer">
    <LastUpdated/>
    <div className="footer-box middle">
      <a href="https://github.com/Tjkeel/Ethereum-Roadmap" target="_blank">
        <img
          src={githubLogo}
          alt="GitHub"
          style={{width: "30px", height: "30px"}}
        />
      </a>
    </div>
    <div className="footer-box right">
      <p>Copyright 2024 Ethroadmap</p>
    </div>
  </footer>;
