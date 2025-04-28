import React from 'react'

const ShowDate = ({timestamp}) => {
  const date = new Date(timestamp);
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-GB", {
    month: "short",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear();

  const currentDate = `${day} ${month} ${year}`;
  const currentTime = date.toLocaleTimeString();
  return (
    <div>
      <p className="text-sm">{currentDate}</p>
      <p className="text-sm">{currentTime}</p>
    </div>
  )
}

export default ShowDate