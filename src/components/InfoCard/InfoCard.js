import "./InfoCard.css";

function InfoCard({ ipInfo }) {
  return (
    <div className="info">
      <div className="box ip-box">
        <span className="box-title">Ip Address</span>
        <span className="box-info">{ipInfo ? ipInfo.ip : "XXX.XXX.X.XX"}</span>
      </div>
      <div className="box location-box">
        <span className="box-title">Location</span>
        <span className="box-info">
          {ipInfo
            ? `${ipInfo.city || ""}, ${ipInfo.region || ""}, ${
                ipInfo.country_name || ""
              }`
            : "Loading..."}
        </span>
      </div>
      <div className="box timezone-box">
        <span className="box-title">TimeZone</span>
        <span className="box-info">
          {ipInfo ? `UTC ${ipInfo.utc_offset || ""}` : "Loading..."}
        </span>
      </div>
      <div className="box isp-box">
        <span className="box-title">Isp</span>
        <span className="box-info">
          {ipInfo ? ipInfo.org || "" : "Loading..."}
        </span>
      </div>
    </div>
  );
}

export default InfoCard;
