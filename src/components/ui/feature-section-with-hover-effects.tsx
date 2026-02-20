import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Giám sát vận hành tập trung",
      description:
        "Theo dõi trạng thái tòa nhà, thiết bị kỹ thuật và tác vụ hàng ngày trên một màn hình trực quan.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Quản lý cư dân thông minh",
      description:
        "Lưu trữ hồ sơ cư dân, hợp đồng, lịch sử tương tác và tự động hóa các quy trình tiếp nhận - hỗ trợ.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Tài chính minh bạch",
      description:
        "Quản lý công nợ, phí dịch vụ và đối soát thanh toán theo thời gian thực với báo cáo rõ ràng.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Hạ tầng ổn định",
      description: "Duy trì vận hành liên tục với cảnh báo sớm khi hệ thống, thiết bị hoặc dịch vụ có bất thường.",
      icon: <IconCloud />,
    },
    {
      title: "Phân quyền theo mô hình tòa nhà",
      description: "Hỗ trợ nhiều cụm, nhiều tòa nhà và nhiều vai trò quản trị trên cùng một nền tảng.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Tiếp nhận & xử lý yêu cầu 24/7",
      description:
        "Ghi nhận phản ánh cư dân, phân công bộ phận phụ trách và theo dõi tiến độ xử lý theo SLA.",
      icon: <IconHelp />,
    },
    {
      title: "Tùy biến theo quy trình nội bộ",
      description:
        "Thiết lập biểu mẫu, luồng phê duyệt và thông báo theo cách vận hành thực tế của ban quản lý.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Trải nghiệm cư dân tốt hơn",
      description: "Nâng cao mức độ hài lòng nhờ phản hồi nhanh, thông tin minh bạch và dịch vụ nhất quán.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
