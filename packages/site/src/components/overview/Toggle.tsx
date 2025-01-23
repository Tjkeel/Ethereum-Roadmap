import "./toggle.css";

export const Toggle = ({ detailed, setDetailed }: {
  detailed: boolean;
  setDetailed: React.Dispatch<React.SetStateAction<boolean>>;
}) => <div id="toggleLayout">
  <label className="switch">
    <input type="checkbox" id="toggleViewButton"/>
    <switch
      className="slider round"
      onClick={() => setDetailed(!detailed)}
    >
      <div id="sw-simp">Simple</div>
      <div id="sw-det">Detailed</div>
    </switch>
  </label>
</div>
