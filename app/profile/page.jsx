import Header from "@/components/Header";

const Page = () => {
  return (
    <section
      style={{
        backgroundColor: "#d0beaa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
        gap: "150px",
      }}
    >
      <div style={{ width: "350px" }}>
        <img
          style={{ borderRadius: "20px" }}
          src="image_profile/sandra.jpg"
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "left",
          padding: "50px",
          fontSize: "30px",
          color: "#ab7543",
        }}
      >
        <span>벌써 내일 모레 마흔살</span>
        <span>이 나이 먹으면서</span>
        <span>인생에서 배운 지혜로</span>
        <span>의사소통을 유연하게 잘하고</span>
        <span>책임감이 강하고</span>
        <span>스트레스를 건강하게 해소하고</span>
        <span>긍정적으로 사고하는</span>
        <span>프론트엔드 개발자</span>
        <span>웹 퍼블리셔 최나리입니다</span>
      </div>
    </section>
  );
};

export default Page;
