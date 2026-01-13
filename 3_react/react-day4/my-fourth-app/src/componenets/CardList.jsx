import Card from "./Card";

function CardList() {
  return (
    <div>
      <h1>카드 컴포넌트</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Card title="기본 카드">이것은 기본 카드입니다.</Card>
        <Card title="주요 정보" variant="primary">
          중요한 정보를 담은 카드입니다.
        </Card>
        <Card title="성공 메시지" variant="success">
          작업이 성공적으로 완료되었습니다.
        </Card>
        <Card title="경고" variant="danger">
          주의가 필요한 내용입니다.
        </Card>
      </div>
    </div>
  );
}

export default CardList;
