import React from "react";

const ProfileId = ({ params }: any) => {
  console.log(params.id);
  const { id } = params;
  return <div>ProfileId - {id}</div>;
};

export default ProfileId;
