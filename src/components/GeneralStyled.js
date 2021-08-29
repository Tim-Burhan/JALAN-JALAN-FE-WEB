import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  backgound-color: #fff;
`;

export const CardDestination = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 10px;
  display: inline-block;
`;

export const Input = styled.input`
  padding: 10px 10px;
  background-color: #fff;
  border-width: 0;
  width: 100%;
  border-bottom: 2px solid #d2c2ff;
  &.form-input {
    margin-bottom: 25px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SectionHori = styled(Section)`
  justify-content: space-between;
`;

export const SectionJustify = styled(Section)`
  justify-content: space-between;
`;

export const SectionData = styled(SectionHori)`
  //   min-width: 300px;
  width: 100%;
  max-width: 400px;
  //   background-color: coral;
`;

export const Squire = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  color: #02331f;
`;

export const TextLabel = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  &.input-label {
    color: #9b96ab;
  }
`;

export const TextCity = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;
export const TextPrice = styled(Text)`
  font-size: 12px;
  font-weight: bold;
`;

export const TextDetail = styled(Text)`
  font-size: 12px;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //   background-color: yellow;
`;

const diametre = 75;
const radius = 0.5 * diametre;

export const PictureWrapper = styled.div`
  width: ${diametre}px;
  height: ${diametre}px;
  background-color: #fff;
  border-radius: ${radius}px;
`;

export const SectionBody = styled.section`
  background-color: #f5f6fa;
  padding: 40px 0;
`;

// the use of all CardGst components in this project will be replaced with Card components
export const CardCst = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 5px;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 5px;
`;

export const Partition = styled.hr`
  margin: 0;
  padding: 0;
`;

export const TopSectionStyles = styled.section`
  min-height: 226px;
  padding-top: 60px;
  background-color: #0ddb89;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
`;
