import "./App.css";
import DiscountCal from "./components/DiscountCal";
import LoginStatus from "./components/LoginStatus";
import WelcomeMsg from "./components/WelcomeMsg";
import StockStatus from "./components/StockStatus";
import UserProfile from "./components/UserProfile";
import Navigation from "./components/Navigation";
import ProductCard from "./components/ProductCard";
import Comment from "./components/Comment";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";
import UserCard from "./components/UserCard";
import NewsCard from "./components/NewsCard";

function App() {
  return (
    <>
      <div className="App">
        <WelcomeMsg />
        <DiscountCal />
        <LoginStatus />
        <StockStatus />
        <UserProfile />
        <Navigation />
        <ProductCard />
        <Comment />
        <Greeting name="김예은" />
        <Greeting name="김예금" />
        <Greeting name="김예동" />
        <ProductInfo name="책상" price="150000" category="가구" />
        <ProductInfo name="노트북" price="1200000" category="전자기기" />
        <UserCard
          name="김예은"
          age={25}
          job="프론트엔드 개발자"
          email="kye1115z@naver.com"
        />
        <NewsCard
          title="리액트 19 정식 출시"
          author="홍길동"
          date="2024-01-15"
          summary="리액트 19 버전이 정식 출시되었습니다."
        />
        <NewsCard
          title="자바스크립트 최신 트렌드"
          author="김철수"
          date="2024-01-14"
          summary="2024년 자바스크립트 생태계의 변화를 알아봅니다."
        />
      </div>
    </>
  );
}

export default App;
