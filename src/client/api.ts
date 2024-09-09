import ky from "ky";

const apiClient = ky.create({
	throwHttpErrors: false,
});

export default apiClient;
