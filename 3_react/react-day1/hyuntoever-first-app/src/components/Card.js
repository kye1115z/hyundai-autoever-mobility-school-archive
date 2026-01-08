import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <ProfileBox className="profile-card">
      <img
        src="https://images-ext-1.discordapp.net/external/Hmv7KdOAvw-V6lUt1ynd0ttRzmvB99Q_IHcl2tI3QVY/%3Fq%3Dtbn%3AANd9GcT7csvPWMdfAHEAnhIRTdJKCK5SPK4cHfskow%26s/https/encrypted-tbn0.gstatic.com/images?format=webp&width=450&height=450"
        alt="프로필"
        className="profile-image"
      />
      <h2 className="profile-name">김예은</h2>
      <p className="profile-desc">프론트엔드 개발자</p>
      <p className="profile-desc">kye1115z@naver.com</p>
    </ProfileBox>
  );
}

export default Card;

const ProfileBox = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }

  .profile-name {
    margin: 10px 0;
    color: #333;
  }

  .profile-desc {
    color: #666;
    margin: 5px 0;
  }
`;
