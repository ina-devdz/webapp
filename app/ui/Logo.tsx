export const SultaAvatar = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <div className="relative w-15 h-15 rounded-full overflow-hidden bg-gray-200">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-0">
          <span className="font-medium">{user.name}</span>
          <span className="text-sm">{user.name_en}</span>
        </div>
      </div>
    </div>
  );
};

const user = {
  name: "السلطة الوطنية المستقلة للانتخابات",
  name_en: "Independent National Electoral Authority",
  avatar: "/logo.avif",
};

export default SultaAvatar;
