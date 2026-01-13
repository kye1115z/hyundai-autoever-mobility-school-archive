type Status = "idle" | "loading" | "success" | "error";

type ApiResponse = {
  status: Status;
  data?: any;
  error?: string;
};

function handleResponse(res: ApiResponse): void {
  if (res.status === "loading") {
    console.log("로딩 중...");
  } else if (res.status === "success") {
    console.log("성공!...");
  } else if (res.status === "error") {
    console.log("에러!...");
  } else {
    console.log("대기 중...");
  }
}

handleResponse({ status: "loading" });
handleResponse({ status: "success", data: { name: "김예은" } });
handleResponse({ status: "error", error: "서버 오류" });
handleResponse({ status: "idle" });
