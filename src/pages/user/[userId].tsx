import { useRouter } from "next/dist/client/router";
import { FC } from "react";

const User: FC = () => {
  const router = useRouter();
  const { userId } = router.query;

  return <div>Hello, {userId}!!</div>;
};
export default User;
