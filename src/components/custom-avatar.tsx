import { Avatar as AntdAvatar, AvatarProps } from "antd";

type Props = AvatarProps & {
  name: string;
};

const CustomAvatar = ({ name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
      alt={"Tatiana Pleshkova"}
      size="small"
      style={{
        backgroundColor: "#09BC8A",
        display: "flex",
        alignItems: "center",
        border: "none",
      }}
    >
      {name}
    </AntdAvatar>
  );
};

export default CustomAvatar;
