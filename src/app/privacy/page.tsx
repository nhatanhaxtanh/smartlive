import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    Shield,
    Lock,
    Eye,
    FileText,
    UserCheck,
    Database,
    Mail,
    AlertCircle,
} from 'lucide-react';

interface PolicySection {
    id: string;
    title: string;
    icon: React.ReactNode;
    content: string[];
}

interface PrivacyPolicyProps {
    companyName?: string;
    effectiveDate?: string;
    contactEmail?: string;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyProps> = ({
    companyName = 'Smart Live',
    effectiveDate = '05/02/2026',
    contactEmail = 'smartlivesup@gmail.com',
}) => {
    const policySections: PolicySection[] = [
        {
            id: 'introduction',
            title: 'Giới thiệu',
            icon: <FileText className="h-5 w-5" />,
            content: [
                `Chào mừng bạn đến với ${companyName}. Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn.`,
                'Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin của bạn khi bạn sử dụng dịch vụ của chúng tôi.',
                'Bằng cách sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản được mô tả trong chính sách này.',
            ],
        },
        {
            id: 'data-collection',
            title: 'Thu thập thông tin',
            icon: <Database className="h-5 w-5" />,
            content: [
                'Chúng tôi thu thập các loại thông tin sau:',
                '• Thông tin cá nhân: Tên, địa chỉ email, số điện thoại, địa chỉ',
                '• Thông tin tài khoản: Tên đăng nhập, mật khẩu (được mã hóa)',
                '• Thông tin sử dụng: Dữ liệu về cách bạn tương tác với dịch vụ của chúng tôi',
                '• Thông tin thiết bị: Địa chỉ IP, loại trình duyệt, hệ điều hành',
                '• Cookies và công nghệ theo dõi tương tự',
            ],
        },
        {
            id: 'data-usage',
            title: 'Sử dụng thông tin',
            icon: <Eye className="h-5 w-5" />,
            content: [
                'Chúng tôi sử dụng thông tin của bạn để:',
                '• Cung cấp và duy trì dịch vụ của chúng tôi',
                '• Cải thiện và cá nhân hóa trải nghiệm người dùng',
                '• Xử lý giao dịch và gửi thông báo liên quan',
                '• Gửi thông tin cập nhật, tin tức và tài liệu marketing (với sự đồng ý của bạn)',
                '• Phát hiện, ngăn chặn và giải quyết các vấn đề kỹ thuật hoặc bảo mật',
                '• Tuân thủ các nghĩa vụ pháp lý',
            ],
        },
        {
            id: 'data-protection',
            title: 'Bảo vệ dữ liệu',
            icon: <Lock className="h-5 w-5" />,
            content: [
                'Chúng tôi thực hiện các biện pháp bảo mật để bảo vệ thông tin của bạn:',
                '• Mã hóa dữ liệu trong quá trình truyền tải (SSL/TLS)',
                '• Mã hóa dữ liệu nhạy cảm khi lưu trữ',
                '• Kiểm soát truy cập nghiêm ngặt đối với thông tin cá nhân',
                '• Giám sát và kiểm tra bảo mật thường xuyên',
                '• Đào tạo nhân viên về bảo mật và quyền riêng tư',
                'Tuy nhiên, không có phương pháp truyền tải qua Internet nào là an toàn 100%.',
            ],
        },
        {
            id: 'data-sharing',
            title: 'Chia sẻ thông tin',
            icon: <UserCheck className="h-5 w-5" />,
            content: [
                'Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp sau:',
                '• Với các nhà cung cấp dịch vụ đáng tin cậy hỗ trợ hoạt động kinh doanh của chúng tôi',
                '• Khi có sự đồng ý rõ ràng của bạn',
                '• Để tuân thủ các yêu cầu pháp lý hoặc quy trình pháp lý',
                '• Để bảo vệ quyền, tài sản hoặc an toàn của chúng tôi và người dùng',
                '• Trong trường hợp sáp nhập, mua lại hoặc bán tài sản',
            ],
        },
        {
            id: 'user-rights',
            title: 'Quyền của người dùng',
            icon: <Shield className="h-5 w-5" />,
            content: [
                'Bạn có các quyền sau đối với thông tin cá nhân của mình:',
                '• Quyền truy cập: Yêu cầu bản sao thông tin cá nhân của bạn',
                '• Quyền sửa đổi: Cập nhật hoặc sửa thông tin không chính xác',
                '• Quyền xóa: Yêu cầu xóa thông tin cá nhân của bạn',
                '• Quyền hạn chế: Yêu cầu hạn chế xử lý thông tin của bạn',
                '• Quyền phản đối: Phản đối việc xử lý thông tin của bạn',
                '• Quyền chuyển dữ liệu: Nhận thông tin của bạn ở định dạng có cấu trúc',
                `Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi qua email: ${contactEmail}`,
            ],
        },
        {
            id: 'cookies',
            title: 'Cookies và công nghệ theo dõi',
            icon: <AlertCircle className="h-5 w-5" />,
            content: [
                'Chúng tôi sử dụng cookies và các công nghệ tương tự để:',
                '• Ghi nhớ tùy chọn và cài đặt của bạn',
                '• Hiểu cách bạn sử dụng dịch vụ của chúng tôi',
                '• Cải thiện hiệu suất và trải nghiệm người dùng',
                '• Cung cấp nội dung và quảng cáo được cá nhân hóa',
                'Bạn có thể kiểm soát cookies thông qua cài đặt trình duyệt của mình.',
            ],
        },
        {
            id: 'contact',
            title: 'Liên hệ',
            icon: <Mail className="h-5 w-5" />,
            content: [
                'Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về chính sách bảo mật này, vui lòng liên hệ với chúng tôi:',
                `Email: ${contactEmail}`,
                'Chúng tôi sẽ phản hồi yêu cầu của bạn trong vòng 30 ngày.',
            ],
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <div className="container mx-auto max-w-5xl px-4 py-12">
                <div className="mb-12 text-center">
                    <div className="mb-4 flex justify-center">
                        <div className="bg-primary/10 rounded-full p-4">
                            <Shield className="text-primary h-12 w-12" />
                        </div>
                    </div>
                    <h1 className="text-foreground mb-4 text-4xl font-bold">
                        Chính sách bảo mật
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Cập nhật lần cuối: {effectiveDate}
                    </p>
                </div>

                <Card className="border-primary/20 mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <AlertCircle className="text-primary h-5 w-5" />
                            Thông báo quan trọng
                        </CardTitle>
                        <CardDescription>
                            Vui lòng đọc kỹ chính sách bảo mật này để hiểu cách
                            chúng tôi xử lý thông tin cá nhân của bạn.
                        </CardDescription>
                    </CardHeader>
                </Card>

                <ScrollArea className="h-auto">
                    <div className="space-y-6">
                        {policySections.map((section, index) => (
                            <Card
                                key={section.id}
                                className="transition-shadow hover:shadow-lg"
                            >
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <div className="bg-primary/10 text-primary rounded-lg p-2">
                                            {section.icon}
                                        </div>
                                        {index + 1}. {section.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {section.content.map(
                                            (paragraph, pIndex) => (
                                                <p
                                                    key={pIndex}
                                                    className="text-muted-foreground leading-relaxed"
                                                >
                                                    {paragraph}
                                                </p>
                                            ),
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </ScrollArea>

                <Separator className="my-8" />

                <Card className="bg-muted/50">
                    <CardContent className="pt-6">
                        <p className="text-muted-foreground text-center text-sm">
                            Chính sách này có hiệu lực từ ngày {effectiveDate}.
                            Chúng tôi có thể cập nhật chính sách này theo thời
                            gian. Mọi thay đổi sẽ được thông báo trên trang này.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default function PrivacyPolicyExample() {
    return <PrivacyPolicyPage />;
}
