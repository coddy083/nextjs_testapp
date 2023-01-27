import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";
import NavBar from "./_navbar";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 2rem;
  padding: 2rem;
`;

export const TopBarStyle = styled.div`
  display: flex;
  color: #000;
  font-size: 2rem;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const LogoStyle = styled.div`
  display: flex;
  color: #000;
  font-weight: bold;
  font-size: 2rem;
  font-family: "sans-serif";
`;

export const InputBoxStyle = styled.div`
  flex: 0.7;
  position: relative;
  display: flex;
  color: #595959;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1rem;
  border-radius: 0.3rem;
`;

export const SearchInputStyle = styled.input`
  flex: 1;
  display: flex;
  color: #595959;
  background-color: #efefef;
  align-items: center;
  padding: 0.8rem 1rem;
  border-radius: 0.3rem;
  border: none;
  outline: none;
`;

export const SearchIconStyle = styled.div`
  position: absolute;
  right: 1.5rem;
`;

export const RightIconBoxStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MainImgStyle = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

export default function Home() {
  console.log("Home");
  return (
    <>
      <MainContainer>
        <TopBarStyle>
          <LogoStyle>WHYdon'tU</LogoStyle>
          <InputBoxStyle>
            <SearchIconStyle>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2311/2311526.png"
                alt="whydontu"
                width={20}
                height={20}
              />
            </SearchIconStyle>
            <SearchInputStyle placeholder="검색">
              {/* 돋보기 */}
            </SearchInputStyle>
          </InputBoxStyle>
          <RightIconBoxStyle>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
              alt="whydontu"
              width={25}
              height={25}
            />
            <Image
              src="https://cdn-icons-png.flaticon.com/512/584/584052.png"
              alt="whydontu"
              width={25}
              height={25}
            />
          </RightIconBoxStyle>
        </TopBarStyle>
        <div style={{ margin: "2rem 0" }}>
          <MainImgStyle src="https://cdnb.artstation.com/p/assets/images/images/028/078/659/large/tv-tvision-pokemonred-v001.jpg?1593435033" />
        </div>
      </MainContainer>
    </>
  );
}
