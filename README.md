
# :large_blue_diamond: Giới thiệu:
## Bài tập cuối kì môn Công nghệ phần mềm 2021.
## - Trường: Đại Học Khoa học Tự Nhiên - Đại học Quốc Gia Hà Nội.
## - Khoa: Toán - Cơ - Tin học.
# :large_blue_diamond: Thành viên nhóm:
1) [Lê Tú Anh]
2) [Phạm Văn Cường]
3) [Nguyễn Đức Anh]
4) [Đỗ Huy Hoàng]
5) [Vũ Huy Hải]
# :large_blue_diamond: Đề Bài:
## Tìm hiểu lập trình React-Native, xây dựng ứng dụng thương mại điện tử trong lĩnh vực nội thất:

## 1. Tìm hiểu về lập trình di động và lập trình react-native 

## A.Tìm hiểu lập trình di động:
### I. Các khái niệm trong lập trình di dộng 
		
 **Khái niệm về CNTT nói chung và Lập trình Di động nói riêng :**

Công nghệ thông tin: là một ngành sử dụng hệ thống các thiết bị và máy tính, bao gồm phần cứng, phần mềm, để cung cấp giải pháp xử lý thông tin trên nền công nghệ cho các cá nhân, tổ chức có yêu cầu.

Ngày nay, với sự bùng nổ dân số, cùng với sự phát triển công nghệ thông tin như vũ bão, máy tính hay laptop dần được con người thu nhỏ lại nhưng vẫn đảm bảo có đầy đủ các chức năng như một máy tính cá nhân. Vì vậy, các dòng điện thoại smartphone lần lượt ra đời, có thể kể đến một số thiết bị di động nổi tiếng như IPhone 5S xài hệ điều hành iOS của hãng Apple, Samsung Galaxy S4 xài hệ điều hành Android của hãng Samsung, Nokia Lumia 930 xài hệ điều hành Windows Phone của Microsoft, …. Và để tăng số lượng người sử dụng smartphone, download ứng dụng từ AppStore thì các hãng thiết bị di động nổi tiếng trên vô Công nghệ thông tin cùng khuyến khích các nhà lập trình viên lên ý tưởng và làm ra một ứng dụng dựa trên ý tưởng của mình. Từ đó, môn học lập trình trên thiết bị di động (TBDĐ) ra đời để các nhà lập trình viên tạo ra được nhiều ứng dụng đa dạng đáp ứng được nhu cầu của nhiều tầng lớp người sử dụng.

**Lập trình cho các thiết bị di động có thể hiểu đơn giản và khái quát như sau:**

Trước hết thế nào là lập trình và lập trình là gì thì có thể hiểu đơn giàn là thiết bị máy móc (Devices) không tự biết phải làm gì đề phục vụ một nhu cầu nào đó của con người. Nó chỉ có thể làm những gì được định sẵn với khả năng thực hiện nhanh và chính xác hơn con người (Keeper sẽ nói về AI - Artificial Intelligence sau, AI = Trí tuệ nhân tạo, khái niệm giúp máy móc thiết bị tự quyết định và tự đưa ra giải pháp tùy tình huống mà không cần con người vạch sẵn)

Vì vậy nếu muốn thiết bị cho ra kết quả của phép nhân từ 2 con số thì người lập trình phải viết 1 đoạn code cung cấp cho thiét bị 2 variables(biến số) represents (đại diện) cho 2 con số muốn tính toán(Calculate) và cách thức (Method) để cho ra kết quả phép nhân. Thiết bị khi đó không cần biết 2 con số là gì mà nó chỉ biết khi người sử dụng nhập 2 con số và click Enter thì nó chỉ việc lấy 2 số này và áp dụng công thức đã được lập trình viên định sẵn và trả về kết quả. Như vậy nếu chỉ có công thức nhân mà không có công thức cộng trừ hay chia thì nó chỉ có thể cho ra kết quả nhân. Do đó muốn nó cho ra kết quả cộng trừ hay chia thì người lập trình buộc phải cung cấp thêm cho nó công thức công trừ hay chia.

Lập trình cho các thiết bị di động như Mobile Phones, Portable Devices, Mobility Devices...Được gọi là lập trình di động.

Lập trình ứng dụng di động là viết ngôn ngữ lập trình (code) để xây dựng các tiện ích, chương trình, app, hệ điều hành trên mobile. Hiện nay, có 2 hệ điều hành trên Smartphone phổ biến nhất là Android và IOS.

Lập trình ứng dụng di động mang đến một không gian mua sắm, tin tức, giải trí thu nhỏ ngay trên Smartphone của mỗi cá nhân.


### II. Xu hướng phát triển lập trình di động:
		
Khi Điện thoại thông minh được “phổ cập” thì sự phát triển của Mobile App – Ứng dụng di động cũng là một điều tất yếu. Ngày càng có nhiều ứng dụng di động ra đời. Ta có thể kể đến các app như mạng xã hội, mua sắm, ví điện tử cho đến các ứng dụng về sức khỏe, đặt hàng… 

**Xu hướng phát triển Mobile App hiện nay:**

Giống như bất kỳ “trend” nào, xu hướng phát triển Mobile App cũng luôn biến đổi. Vì vậy, doanh nghiệp cũng phải nhanh nhạy nắm bắt và điều chỉnh phù hợp. Một số xu hướng phát triển Mobile App năm 2021 đã xuất hiện một thời gian, nhưng một số khác lại là những xu hướng mới nhất.

***Cloud-Native:***

Cloud native là một cách tiếp cận để xây dựng Mobile App bằng cách khai thác các lợi thế của mô hình điện toán đám mây. Cloud-native applications là các ứng dụng được viết trên môi trường cloud, thay vì xây dựng trên các trung tâm dữ liệu truyền thống. Mọi thứ trên các ứng dụng này đều do các nhà cung cấp giải pháp Cloud như AWS, Google Cloud hoặc Azure xử lý.

Cloud-native mang đến nhiều lợi ích cho các nhà phát triển và doanh nghiệp. Ví dụ như Google Cloud serverless tooling cho phép mở rộng quy mô tự động tùy thuộc vào lưu lượng truy cập trang web.

***Internet of Things:***

Theo dự báo, thị trường IoT ở Mỹ đến năm 2022 sẽ vượt 500 tỷ USD. Và phần lớn thị phần này thuộc về phân khúc điện tử tiêu dùng. Công nghệ IoT đang tác động đến cách con người tương tác với nhau. Đồng thời, nó còn tác động mạnh mẽ đến cách người ta sống trong nhà của họ bằng việc tương tác với các thiết bị gia đình. Có thể thấy rằng, lĩnh vực tác động nổi bật nhất của IoT là nhà thông minh. Số người dùng smartphone để điều khiển thiết bị gia đình thông qua các ứng dụng trên điện thoại ngày càng tăng. Các dự báo cho biết đến năm 2030 sẽ có khoảng 50 tỷ thiết bị IoT được sử dụng trên khắp thế giới. Nghĩa là, một mạng lưới khổng lồ giữa các thiết bị sẽ được tạo ra và kết nối với nhau. Hơn nữa, IoT có tiềm năng chia sẻ dữ liệu, nó chắc chắn sẽ thu hút sự chú ý của ngành công nghiệp ứng dụng.

***Ví điện tử – Mobile Wallet:***

Ví điện tử đang ngày một trở nên phổ biến trong bối cảnh chuyển đổi số đang diễn ra mạnh mẽ. Ở Việt Nam, các ví điện tử như Momo, ShopeePay, ZaloPay… cũng đang trong quá trình tiếp cận và mở rộng thị trường. Ví điện tử mang đến sự tiện lợi, dễ sử dụng, tốc độ xử lý nhanh, nhiều ưu đãi… Vì vậy, người dùng đang dần chấp nhận loại hình thanh toán mới này. Chính vì thế, tiềm năng phát triển của thị trường vẫn còn khá lớn. Tuy nhiên, các nhà phát triển cũng cần cân nhắc về yếu tố bảo mật, rào cản lớn nhất đối với người dùng.

***Trí tuệ nhân tạo (AI) & Machine Learning trong Mobile App:***

AI và Machine Learning đã được đưa vào trong các Mobile App. Những tính năng thường gặp có thể kể đến như Chatbots, nhận dạng khuôn mặt hay tìm kiếm bằng giọng nói. Trong tương lai gần, việc sử dụng camera có tích hợp AI, hay dịch giọng nói sẽ còn phổ biến hơn.

Tương lai của AI sẽ được ứng dụng để:

	Nhận dạng hình ảnh, phân loại và gắn thẻ
	
	Xác định vật thể, phân loại và theo dõi
	
	Xử lý dữ liệu
	
	Dự báo
	
***Chatbots:***

Chatbots đã và đang “len lỏi” vào cuộc sống hàng ngày của chúng ta. Những câu hỏi thường gặp như thời gian mở cửa, menu, giá dịch vụ… có thể được trả lời một cách tự động. Người bán vui vẻ vì không phải trả lời lặp lại. Người mua cũng hài lòng vì được phản hồi nhanh chóng. Ứng dụng “My Starbucks Barista” là một ví dụ thành công. Nó cho phép người dùng đặt và thanh toán qua việc giao tiếp bằng giọng nói với trợ lý ảo này. Ở Việt Nam, Chatbots được ứng dụng phổ biến với Facebook Messenger hay các trang TMDT.

***Công nghệ thực tế ảo – thực tế tăng cường (AR-VR):***

AR-VR tiếp tục là xu hướng phát triển Mobile App của năm 2021. Pokemon Go! là cú hích lớn cho việc đưa AR vào Mobile game. Giờ đây, nó đã xuất hiện ở nhiều loại ứng dụng hơn như các app chụp ảnh, làm đẹp…


### III. Các loại lập trình di động: lập trình native, đa nền tảng … 
Thị trường phát triển các ứng dụng di động cũng chủ yếu xoay quay hai loại nền tảng là :IOS và Android

**Ngôn ngữ lập trình ứng dụng IOS:**

Ngôn ngữ lập trình dành cho hệ điều hành IOS được xem là phổ biến và sử dụng rộng rãi bởi các lập trình viên hiện nay :

***Swift:***

Swift chính là ngôn ngữ lập trình ứng dụng ios vô cùng phổ biến hiện nay. Với nhiều tính năng được Apple bổ sung như khả năng tìm lỗi, syntax đơn giản, Swift đang ngày càng thịnh hành và trở thành ngôn ngữ chủ lực cho toàn bộ hệ thống.

***Objective-C :***

Dường như được sinh ra chỉ để dành riêng cho Apple Mac, Objective-C là một ngôn ngữ lập trình hướng đối tượng và phức tạp hơn so với ngôn ngữ C hoặc Java. Tuy nhiên, việc sử dụng Objective hay tạo ứng dụng thực tế với ngôn ngữ này lại không quá khó với những công cụ có sẵn mà Apple cung cấp.

**Ngôn ngữ lập trình ứng dụng Android:**

Nói đến hệ điều hành Android, bạn sẽ không thể nào bỏ qua được những ngôn ngữ lập trình nổi bật đang được ưa chuộng nhất hiện nay:

***Java:***

Java là ngôn ngữ lập trình ứng dụng android được xem là phổ biến và quan trọng nhất hiện nay mà bất kỳ lập trình viên nào cũng cần phải trang bị kiến thức về nó. Java được thiết kế theo đúng khẩu hiệu “Viết một lần, chạy mọi nơi", nó có thể hoạt động trên nhiều nền tảng khác nhau.

Nếu bạn đang có ý định xây dựng một phần mềm doanh nghiệp, games, các trang web hay ứng dụng Android thì Java chính là ngôn ngữ mà bạn sẽ tiếp xúc và làm việc lâu dài.

***Kotlin:***

Được phát triển bởi IDE nổi tiếng JetBrains, ngôn ngữ lập trình ứng dụng android Kotlin được ra đời với mục đích giải quyết những vấn đề còn tồn tại trong ngôn ngữ Java.

Ngôn ngữ này có syntax nhỏ gọn, đơn giản và giảm bớt được những dòng code dài dòng và rườm rà. Từ đó, người viết có thể tập trung hơn trong việc giải quyết vấn đề thay vì xoay quanh các câu lệnh phức tạp.

**Ngôn ngữ lập trình ứng dụng đa nền tảng:**

Ngoài các ngôn ngữ dành cho các ứng dụng IOS hay Android bạn cũng có thể tham khảo thêm các loại ngôn ngữ lập trình khác dành cho ứng dụng đa nền tảng sau đây:

***Javascript:***

Javascript nghe có vẻ giống Java nhưng thực tế, nó có mối liên hệ nhất định với ngôn ngữ lập trình C. Đây là ngôn ngữ lập trình ứng dụng đa nền tảng có khả năng chạy trên nhiều nền tảng, trình duyệt khác nhau được sử dụng với mục đích phát triển game hay các ứng dụng trên desktop.

Tuy nhiên, javascript thường được ứng dụng để phát triển tính năng tương tác, thiết kế web và tạo hiệu ứng web nhiều hơn.

***Typescript:***

Typescript chính là phiên bản nâng cấp của Javascript. Ngôn ngữ lập trình ứng dụng này có tính an toàn hơn nhờ có hỗ trợ tĩnh và cung cấp thêm nhiều hỗ trợ khác giúp phát triển các ứng dụng mang tính quy mô lớn.

Ngoài ra, dưới sự duy trì và phát triển của Microsoft, bằng cách sử dụng các framework như NativeScript, loại ngôn ngữ này còn cho phép các nhà phát triển ứng dụng có khả năng viết ứng dụng đa nền tảng trên thiết bị di động.

**Các loại ngôn ngữ lập trình ứng dụng khác :**

Bên cạnh những ngôn ngữ lập trình phổ biến nói trên thì bạn cũng nên tìm hiểu thêm về các loại ngôn ngữ lập trình dưới đây để có thể mở rộng hiểu biết và thêm nhiều sự lựa chọn hơn khi tạo ứng dụng.

***C++ :***

Là phiên bản nâng cấp của ngôn ngữ lập trình C, C++ chính là ngôn ngữ tạo ra các ứng dụng nổi tiếng như Adobe, Firefox và nhiều game khác trên máy tính. Tuy tốc độ của C++ là đáng kinh ngạc nhưng nó đòi hỏi bạn phải là một lập trình viên chuyên nghiệp và có khả năng xử lý cao.

***C#:***

C# hay C-sharp là ngôn ngữ lập trình ứng dụng được phát triển từ ngôn ngữ Java mặc dù hai cái tên này không mấy liên quan đến nhau. Các ứng dụng, phần mềm được viết bằng C# tuy đa năng nhưng nó chỉ chạy trên hệ điều hành Window và phải có .Net Framework.

***Ruby:***

Chịu ảnh hưởng của C++, Ada, Python, Perl và Lisp, Ruby là ngôn ngữ lập trình kịch bản hướng đối tượng và là một framework tuyệt vời được sử dụng với mục đích phát triển các ứng dụng di động đa nền tảng hoặc ứng dụng đơn thuần. Không khó để có thể sử dụng Ruby bởi cú pháp tập trung nhiều vào tính hiệu suất và đơn giản.

***Python:***

Là ngôn ngữ lập trình hướng đối tượng, Python thích hợp và khá đơn giản để học đối với những lập trình viên mới bắt đầu học ngôn ngữ. Ngôn ngữ lập trình ứng dụng này tính đa dạng, nó được xem là nền tảng hỗ trợ bạn học thêm về các ngôn ngữ khác.

Điển hình là từ Python, bạn có thể tiếp cận dễ dàng hơn với Ruby hoặc giúp nhiệm vụ covert PHP trở nên đơn giản hơn.
### IV. Các nền tảng lập trình di đông:

Ngày nay khi nhu cầu sử dụng các ứng dụng của con người có xu hướng thiên về thiết bị di động, các phần mềm dần chuyển lên hỗ trợ hoặc bắt đầu phát triển từ nền tảng mobile. Do vậy mà các nền tảng lập trình mobile cũng trở nên đa dạng hơn so với trước đây. Trong bài viết này chúng ta cùng tìm hiểu những nền tảng lập trình ứng dụng phần mềm mobile, đặc biệt trên hai nền tảng phổ biến nhất tới thời điểm hiện tại là hệ điều hành Android của Google và iOS của Apple.

**1. Nền tảng tự nhiên (native):**

Từ ngày đầu khi các hệ điều hành mobile xuất hiện thì các nhà sản xuất cũng phát hành cùng với bộ công cụ hỗ trợ lập trình phần mềm cho nền tảng của họ, mà giới lập trình di động hay gọi là Native. Native dịch ra tiếng Việt nghĩa là tự nhiên, cũng đúng với ý nghĩa đó, các phần mềm Native là những phần mềm được xây dựng trên môi trường đặc thù riêng của từng nền tảng do chính nhà phát hành hệ điều hành xây dựng và công bố.

Đối với nền tảng Android chúng ta có nền tảng phát triển ứng dụng là ngôn ngữ lập trình Java, và được Google hỗ trợ bộ công cụ Android Studio (bộ công cụ phát triển dựa trên IntelliJ IDEA). Tiền thân của Android Studio là ADT (một bộ công cụ chỉnh sửa dựa trên Eclipse). Hiện tại ngoài Java là ngôn ngữ lập trình chính, Android của Google còn hỗ trợ thêm nhiều ngôn ngữ lập trình khác như Kotlin, python, C/C++ …

Đối với nền tảng iOS, Apple cung cấp nền tảng ngôn ngữ lập trình Native là Objective-C và Swift. Các ngôn ngữ lập trình này được hỗ trợ bởi một công cụ lập trình cực kỳ mạnh mẽ là Xcode. Khi mới ra đời, iOS chỉ hỗ trợ chính một ngôn ngữ là Objective-C, nhưng với cú pháp gây khó khăn cho những nhà phát triển khi mới bắt đầu tiếp cận, Apple đã phát triển và giới thiệu thêm ngôn ngữ Swift, một ngôn ngữ có cú pháp gần gũi và thân thiện hơn cho người lập trình.

**Ưu điểm:** Là được hỗ trợ mạnh mẽ từ chính nhà phát triển các nền tảng Mobile, khả năng trải nghiệm vận hành phần mềm ở mức tối ưu nhất.

**Nhược điểm:**  Là mỗi nền tảng sẽ cần một đội phát triển, có kinh nghiệm riêng mỗi nền tảng.

**2. Nền tảng crossplatform:**

Với nhu cầu ngày càng cao về ứng dụng di động và những bước phát triển mạnh mẽ của các phần mềm trên các dòng thiết bị này, môi trường phát triển cũng dần trở nên vô cùng sôi động. Giới lập trình cũng có thêm được nhiều sự lựa chọn hơn trong việc phát triển phần mềm.

Trước đây hầu hết những phần mềm di động sẽ chia ra thành nhiều đội phát triển trên từng nền tảng (Android, iOS, Window Mobile, Tizen, Blackberry,fireFoxOS … ), nhưng với những yêu cầu ngày càng khắc khe về thời gian và giá thành phần mềm, những nền tảng crossplatform bắt đầu xuất hiện nhiều hơn. Chúng ta cùng tìm hiểu một số nền tảng nổi bật.

**• Nền tảng di động dựa trên web:**

Đây là những nền tảng phát triển mobile dựa trên nền tảng lập trình web, nhà phát triển là người có kinh nghiệm phát triển ứng dụng web và dễ dàng chuyển qua môi trường phát triển cho di động bởi các ngôn ngữ lập trình và môi trường phát triển trên nền tảng này tương tự hoặc gần gũi với web, ngôn ngữ  lập trình đặc trưng là Javascript, Typescript, CoffeScript, NativeScript, một số ngôn ngữ phát triển từ JavaScript và các công cụ xây dựng giao diện dựa trên HTML,CSS hoặc các công cụ biến thể tương đương, một số nền tảng nổi bật như: Phonegap, IONIC, Apache Cordova …

**Ưu điểm:** Tận dụng được nhân lực lớn từ mảng web chuyển sang, rút ngắn được thời gian tiếp cận.

**Nhược điểm:** Là khả năng tối ưu phần mềm, tốc độ thực thi theo đánh giá không tốt bằng Native, và nhiều tác vụ can thiệp sâu hệ thống không thực hiện được, tuy vậy hiện nay các công cụ cũng đang dần tối ưu bộ công cụ dịch mã để rút ngắn khoảng cách với Native.

**• Nền tảng dựa trên môi trường dịch hướng NATIVE từ bên thứ 3:**

Hiện tại đây là một trong những hướng phát triển mạnh mẽ, và thu hút được lượng lớn các nhà phát triển phần mềm. Phương pháp này phù hợp với những lập trình viên có kinh nghiệm với các ngôn ngữ lập trình hướng đối tượng (xuất phát từ nền tảng lập trình Mobile Native hoặc từ một nền tảng khác mobile). Cách thức hoạt động của nền tảng này là nhà cung cấp xây dựng một môi trường thứ 3, để dịch một ngôn ngữ lập trình của nền tảng thứ 3 (không phải Native) sang nền tảng Native.

Nổi bật phải kể đến là Xamarin của Microsoft, React-native của Facebook và Flutter của Google. Các nền tảng này sẽ có một ngôn ngữ lập trình riêng, Xamarin dùng C#, React-native dùng Javascript, và Flutter dùng Dart làm ngôn ngữ lập trình chính. Các nền tảng này sẽ dịch các mã nguồn từ các ngôn ngữ thứ 3 sang ngôn ngữ Native khi nhà phát triển tiến hành build.

**Ưu điểm:** Là tốc độ thực thi ứng dụng tốt, gần tương đương với ứng dụng Native, rút ngắn thời gian phát triển ứng dụng, thu hút được lượng lập trình viên từ các nền tảng.

**Nhược điểm:** Là cần hỗ trợ từ nhà phát hành khi các hệ điều hành nâng cấp.



## B. Tìm hiểu lập trình react-native

**Native App là gì ?**

Native app là các ứng dụng được phát triển và build trên chính những công cụ hỗ trợ mà nhà phát triển iOS và Android cung cấp cho người lập trình viên ở đây là XCode và Android. Chúng được viết bằng ngôn ngữ mà nhà phát triển iOS và Android cung cấp ra iOS thì là Swift hiện tại, xưa là Objective C, còn Android thì hiện tại tồn tại song song là Java và Kotlin. Các ứng dụng Native được build dựa trên ngôn ngữ của chính hệ điều hành và sử dụng những tính năng sẵn có của hệ điều hành mà không phải thông qua bất cứ ứng dụng bên thứ ba hay engine nào khác để vận hành nên tốc độ là nhanh nhất.

**React Native là gì ?**

React Native là một framework ứng dụng di động mã nguồn mở, được phát triển bởi Facebook. Bản phát hành bản đầu tiên của nó là vào ngày 26 tháng 3 năm 2015. React Native được thiết kế để tạo các ứng dụng di động cho iOS và Android bằng cách cung cấp cho các developer một công cụ để sử dụng React cùng với nền tảng di động gốc.

React Native giúp chúng ta tiết kiệm được nhiều thời gian và công sức nếu muốn xây dựng một ứng dụng đa nền tảng (multi-platform)

**Các khái niệm trong react-native.**
		
• ***Components*** : là một khái niệm cơ bản của cả React và React native. Chính việc chia nhỏ ứng dụng thành các components nhỏ tạo nên tính tái sử dụng cao và khả năng mở rộng của chúng.

Có hai loại component: class component và function component.
		
• ***Props*** : là viết tắt của Properties. Một điều mà bạn cần phải nhớ khi sử dụng props đó là không bao giờ nên thay đổi giá trị của nó, hay nói cách khác, đây là một dữ liệu cố định, bất biến.

Các component nhận props từ component cha. Bạn không được thay đổi giá trị của props trong các component này mà chỉ được phép đọc giá trị ra thôi. Trong React thì dữ liệu sẽ đi theo một chiều, có nghĩa là từ component cha đến các component con.

• ***State*** : State thì hoạt động khác với Props. State là dữ liệu nội bộ của một Component, trong khi props là dữ liệu được truyền cho Component. Chính vì vậy chúng ta hoàn toàn có thể thay đổi state, và coi nó là một kiểu dữ liệu có thể thay đổi. Vì đặc điểm này nên chúng ta hay sử dụng State để thay đổi dữ liệu của view, binding data lại view khi có thay đổi. Nhưng chúng ta không dùng this.state để gán lại giá trị thay đổi cho nó, mà chúng ta sẽ dùng this.setState. Function này sẽ trigger cho class rằng hãy render lại component và các component con của nó, còn this.state thì không.


**Cơ chế hoạt động**

React Native hoạt động bằng cách tích hợp 2 thread là Main Thread và JS Thread cho ứng dụng mobile. Với Main Thread sẽ đảm nhận vai trò cập nhật giao diện người dùng(UI). Sau đó sẽ xử lý tương tác người dùng. Trong khi đó, JS Thread sẽ thực thi và xử lý code Javascript. Hai luồng này hoạt động độc lập với nhau.

Để tương tác được với nhau hai Thread sẽ sử dụng một Bridge(cầu nối). Cho phép chúng giao tiếp mà không phụ thuộc lẫn nhau, chuyển đổi dữ liệu từ thread này sang thread khác. Dữ liệu từ hai Thread được vận hành khi tiếp nối dữ liệu cho nhau.


***Redux trong React Native***

Redux js là một thư viện Javascript giúp tạo ra thành một lớp quản lý trạng thái của ứng dụng. Được dựa trên nền tảng tư tưởng của ngôn ngữ Elm kiến trúc Flux do Facebook giới thiệu, do vậy Redux thường là bộ đôi kết hợp hoàn hảo với React.  Nó giúp các ứng dụng hoạt động ổn định, chạy trong các môi trường khác nhau (client, server, and native) và dễ kiểm tra.

Redux có 4 thành phần như sau:

•  *Actions*

Action là nơi mang các thông tin gửi từ ứng dụng đến Store, mô tả chúng ta muốn làm cái gì với cái store này. Các thông tin này là 1 object mô tả những gì đã xảy ra. Action gồm 2 phần là type (kiểu mô tả action), và giá trị tham số truyền lên.

• *Reducers*

Action có nhiệm vụ mô tả những gì xảy ra nhưng lại không chỉ rõ phần state nào của response thay đổi và thay đổi như thế nào. Việc này sẽ do Reducer đảm nhiệm. Reducer nhận 2 tham số: state cũ và thông tin action được gửi lên, sau đó nó biến đổi trả ra một state mới, không làm thay đổi state cũ.

• *Store*

Store là 1 object lưu trữ tất cả state của ứng dụng, cho phép truy cập state qua getState(), update state qua dispatch(action), đăng kí listener qua subscribe(listener). Trong store nó có Dispatcher, Reducer, State. Dispatcher là phần quản lý middleware, thường dùng để gọi API, log,... Sau khi dispatch xong thì nó đẩy xuống Reducer, reducer này đơn giản là 1 function nhận vào 2 thứ: state cũ và thông tin action, biến đổi cho ra state mới. Chính nhờ cái này mà redux có tính predictable, tức là cùng 1 state, cùng 1 action thì nó luôn luôn cho ra 1 state mới giống nhau.

• *View*

View là phần giao diện, hiển thị giao diện thông qua state của store.

Trong quá trình xây dựng Redux, các chuyên gia đã dựa vào 3 nguyên lý cơ bản sau đây:

• Sử dụng nguồn dữ liệu đảm bảo tin cậy. Các state của tất cả ứng dụng đều nằm cùng một object tree trong một Store duy nhất.

• Chỉ được phép đọc trạng thái. Hiểu đơn giản, để thay đổi trạng thái của ứng dụng, cách duy nhất là thực hiện một Action.

• Sử dụng các hàm thuần túy để thay đổi với mục đích chỉ ra cách state được biến đổi từ Action. Vì thế, chúng ta mới cần sử dụng các pure function được gọi là Reducer.

***Những lợi ích của Redux:***

• Hỗ trợ dự đoán trạng thái

Redux có chức năng dự đoán và quản lý trạng thái và chúng sẽ không bao giờ thay đổi. Lợi ích này có thể giúp người dùng thực hiện các nhiệm vụ phức tạp như hoàn tác hoặc làm lại vô thời hạn. Đồng thời, Redux còn có chức năng luân chuyển linh hoạt giữa các trạng thái để kiểm tra hiệu quả trong thời gian thực.

• Khả năng bảo trì

Redux có một hệ thống code cực kỳ nghiêm ngặt, nhưng với những người đã sử dụng và hiểu về Redux sẽ tiếp cận dễ dàng hơn. Cũng chính việc này đã giúp cho Redux có thể được bảo trì một cách dễ dàng. Bên cạnh đó, lợi ích này còn góp phần giúp người dùng tách biệt logic nghiệp vụ khỏi sơ đồ thành phần. Trong khi đó, mục tiêu quan trọng của các ứng dụng có quy mô lớn hiện nay đều là hướng cho phần mềm của mình có thể dự đoán cũng như bảo trì được

• Gỡ lỗi một cách dễ dàng

Redux cho phép người dùng gỡ lỗi dễ dàng bằng cách lưu lại những Action và trạng thái để dễ nhận diện đối với những trường hợp lỗi mã hóa, lỗi mạng và một số lỗi khác khi định dạng trong quá trình triển khai chương trình. Việc gỡ lỗi thông thường sẽ cần nhiều thời gian và phức tạp nhưng với Redux DevTools của Redux sẽ hỗ trợ người dùng thực hiện thao tác gỡ lỗi dễ dàng hơn.

• Lợi ích về hiệu suất

React Redux thực hiện nhiều tối ưu hóa hiệu suất bên trong để thành phần được kết nối của riêng bạn chỉ hiển thị khi thực sự cần.

• Dễ kiểm tra

Tương đối dễ dàng để kiểm tra các ứng dụng Redux vì các chức năng được sử dụng để thay đổi trạng thái của các chức năng thuần túy.

• Trạng thái bền bỉ

Chúng ta có thể duy trì một số trạng thái của ứng dụng trong bộ nhớ cục bộ và khôi phục chúng sau khi làm mới. Điều này thực sự tiện lợi.

• Kết xuất phía máy chủ

Trên máy chủ có thể để Redux được hiển thị, người dùng có thể xử lý các kết xuất ban đầu của chương trình bằng cách truyền tải những trạng thái đến các máy chủ và đợi phản hồi từ nó.



**Ưu - nhược điểm của React Native**

***Ưu điểm***

• Có thể tái sử dụng code

React Native cho phép các developer có thể tái sử dụng code trong khi phát triển các ứng dụng đa nền tảng. Đặc biệt, developer có thể tái sử dụng hầu như 80-90% các đoạn code thay vì phải viết và tạo các ứng dụng riêng biệt cho các nền tảng khác nhau.  Ưu điểm này giúp người dùng tiết kiệm thời gian và giảm chi phí phát triển của một ứng dụng, tận dụng nguồn nhân lực tốt hơn cũng như duy trì ít code hơn, ít bugs hơn.

• Cộng đồng người dùng lớn

React Native được đánh giá là một trong những Framework được yêu thích nhất (khảo sát của stack overflow vào năm 2019).  Nhờ cộng đồng người dùng rất lớn trên toàn thế giới, ta có thể tìm sự hỗ trợ nếu gặp phải bugs. 

• Tính ổn định và tối ưu

Được phát triển bởi Facebook, React Native có hiệu năng ổn định khá cao. Mã React Native giúp đơn giản hóa quá trình xử lý dữ liệu. Đội ngũ phát triển ứng dụng không quá lớn. Xây dựng ứng dụng ít native code nhất cho nhiều hệ điều hành khác nhau.

• Thời gian học tập ngắn

Một lập trình viên ứng dụng di động cần tìm hiểu hai hệ sinh thái hoàn toàn khác nhau. Trong trường hợp muốn học lập trình app iOS thì cần phải học Swift hay CocoaPods, Objective-C. Mặt khác, nếu muốn học lập trình Android thì phải học Java, Android SDK, Kotlin. Mỗi framework đều có một gói những công cụ như: libs, testing, packages… và việc các lập trình viên phải cập nhật các tính năng mới nhất của hệ sinh thái là điều cần thiết. Tuy nhiên, với việc lập trình trên React Native, chúng ta chỉ cần học một bộ công cụ duy nhất.

***Nhược điểm***

• Yêu cầu Native code.

• Hiệu năng kém hơn so với Native App.

• Bảo mật chưa thật sự tốt do dùng JavaScript. Do sử dụng JavaScript, người dùng cũng sẽ bị ảnh hưởng bởi những đặc điểm của JavaScript: dễ làm dễ sai, dẫn đến khó duy trì về sau. 

• Quản lý bộ nhớ.

• Thiếu các component, tuy nhiên đang dần có nhiều cập nhật mới.

• Tùy biến chưa thật sự tốt ở một số module.

• Không thích hợp cho các app cần năng lực tính toán cao (hash, crypto, etc).

• Không xây dựng được ứng dụng iOS trên Linux và Window bởi Apple yêu cầu tất cả các ứng dụng iOS cần phải được sử dụng nhiều native libs từ Xcode.
		
		
**Xu thế lập trình react-native hiện tại.**

Mạng internet ngày càng phát triển, con người trên thế giới sử dụng điện thoại di động cùng với nhiều phần mềm khác nhau kéo theo sự phát triển không ngừng của công nghệ thông tin làm cho react native ngày càng quan trọng. React native nhắm đến nền tảng điện thoại di động thay cho các trình duyệt. Các nhà lập trình viên web sẽ viết những ứng dụng di động có giao dện tự nhiên cho điện thoại. Điều này cho thấy react native sẽ cho chúng ta tất cả sức mạnh của một ứng dụng native với việc phát triển dễ dàng đi kèm với react.

## C. So sánh lập trình react-native với các nền tảng khác ##

	c1:So sánh Flutter và React Native
	
	 c1.a:Khái quát 
 Hai Framework phát triển ứng dụng di động đa nền tảng phổ biến nhất hiện nay là Flutter và React Native . Hai “thế lực” này được hỗ trợ bởi hai trong số những công ty công nghệ lớn nhất trên thế giới: Flutter được tạo ra bởi Google và React Native được tạo ra bởi Facebook.
 
	*Flutter	
 • Flutter là một framwork giao diện người dùng đa nền tảng do Google phát triển. Nó được phát hành lần đầu tiên vào tháng 5 năm 2017 và đã dần trở nên phổ biến trong những năm qua.
		
 • Một trong những điểm hấp dẫn chính của Flutter là nó cho phép bạn tạo các ứng dụng đa nền tảng bằng cách sử dụng một ngôn ngữ lập trình duy nhất. Theo truyền thống, nếu một công ty muốn tạo một ứng dụng có sẵn trên web, thiết bị di động và máy tính để bàn, thì công ty đó sẽ phải sử dụng nhiều hơn một công cụ để đạt được mục tiêu đó. Ví dụ: cần phải thuê một dev chuyên về phát triển web, một dev khác có kinh nghiệm xây dựng ứng dụng dành cho máy tính để bàn và một dev khác nữa chuyên dụng để xây dựng ứng dụng cho iOS và Android. Trong tình huống như vậy, bạn có thể có một dev sử dụng React để xây dựng trang web, một dev sử dụng C # và Java để tạo phiên bản dành cho máy tính để bàn và một dev khác sử dụng Kotlin hoặc Swift để tạo ứng dụng Android và iOS tương ứng. Điều này đòi hỏi rất nhiều nhân lực cũng như sự đồng bộ giữa các nền tảng (vd câu lệnh query, hiển thị…)
		
 • Với Flutter, các công ty có thể thuê một dev để tạo ứng dụng trên các nền tảng chỉ với ngôn ngữ lập trình-framwork . Điều này cắt giảm đáng kể thời gian và tài nguyên cần thiết để khởi chạy và duy trì một ứng dụng.
		
	*React Native 
 • React Native là một framework đa nền tảng do Facebook tạo ra. Nó làm cho việc tạo các ứng dụng đa nền tảng trở nên khá đơn giản vì codebase về cơ bản được viết bằng JavaScript. Điều này làm giảm rào cản gia nhập đối với các nhà phát triển JavaScript vì họ không cần phải học một ngôn ngữ hoàn toàn xa lạ.
		
 • Việc phát triển web đã có từ nhiều năm và hầu hết các nhà phát triển web đã sử dụng JavaScript trong phần lớn sự nghiệp của họ. Sự phát triển di động vẫn còn khá mới mẻ, nhưng hệ sinh thái đã trưởng thành khá nhiều trong vài năm qua. Nếu bạn đã biết JavaScript, thì con đường học tập để phát triển ứng dụng dành cho thiết bị di động bằng cách sử dụng React Native sẽ không quá khó khăn.

 • Ngày nay, nhiều công ty đang sử dụng React Native để phát triển ứng dụng. Microsoft gần đây đã phát triển ứng dụng cửa hàng Xbox mới của mình bằng cách sử dụng React Native, là một ví dụ nổi bật. Giống như Flutter, React Native giúp bạn có thể tạo ứng dụng trên nhiều nền tảng khác nhau bằng cách sử dụng một mã code duy nhất.
	
	c1.b: Sự khác biệt chính giữa Flutter và React Native
 Flutter và React Native có rất nhiều điểm tương đồng, nhưng chúng cũng khá khác nhau ở một số điểm chính:
		
 • Đối với người mới bắt đầu, Flutter sử dụng ngôn ngữ lập trình Dart trong codebase của nó trong khi React Native sử dụng JSX, viết tắt của JavaScript XML. Cả hai ngôn ngữ đều dựa trên kiểu cú pháp kiểu C và tuân theo các nguyên tắc hướng đối tượng. Điểm chung này có nghĩa là Flutter và React Native về cơ bản giống nhau về thiết kế và code cũng rất giống nhau.

 • Lập trình dynamic so với static Có một sự khác biệt đáng kể khi nói đến ngôn ngữ lập trình cốt lõi. Bản chất JavaScript là động. Điều này có nghĩa là bạn có thể thay đổi giá trị của nhiều kiểu dữ liệu khác nhau, điều này làm cho nó rất linh hoạt. Dart vừa động vừa tĩnh, điều này cho phép nó có được những điều tốt nhất của cả hai loại lập trình trên.

 • Một ngôn ngữ được nhập tĩnh thường được coi là an toàn hơn nhiều vì nó buộc bạn phải khai báo và sử dụng đúng kiểu dữ liệu. Ví dụ, bạn không thể gán một số cho một chuỗi; làm như vậy sẽ tạo ra một lỗi.

 • Tĩnh nghĩa là bạn có thể gặp ít lỗi hơn. Có thể thực thi thêm tính năng kiểm tra lỗi và an toàn kiểu với JavaScript nếu bạn chọn sử dụng TypeScript, thay vào đó là một tập hợp siêu cú pháp nghiêm ngặt của JavaScript.
 • Layout:
 +,Flutter sử dụng kiểu widget để xây dựng giao diện người dùng trong khi React Native sử dụng JavaScript và JSX. Các widget Flutter được tạo sẵn, vì vậy về mặt kỹ thuật, bạn không cần phải tạo các widget tùy chỉnh của riêng mình trừ khi bạn muốn. Vì chúng được tạo và thử nghiệm bởi Google, bạn không cần phải lo lắng về vấn đề không tương thích.

 +,Nếu bạn đang sử dụng một ngôn ngữ lập trình như Swift để phát triển ứng dụng dành cho thiết bị di động, bạn thường không thể thấy mã nguồn mà Apple đã sử dụng để tạo các thành phần giao diện người dùng, chẳng hạn như các nút. Ngược lại, với Flutter, mã có thể xem được nên bạn có thể thấy cách Google tạo ra tất cả các tiện ích.

 +,Flutter và React Native có điểm chung khi xây dựng bố cục ở chỗ cả hai đều sử dụng CSS Flexbox . Cách họ triển khai nó là khác nhau, nhưng miễn là bạn biết Flexbox, bạn sẽ không gặp bất kỳ vấn đề nào khi xây dựng bố cục cho ứng dụng của mình. Nhóm làm việc trên Flutter cũng đã làm việc trên các công cụ dành cho nhà phát triển cho trình duyệt Google Chrome, giúp chuyển đổi nhanh chóng vì các công cụ gỡ lỗi khá giống nhau.
		
	c1.c:Tại sao phát triển ứng dụng di động lại phổ biến như vậy?
 • Lĩnh vực phát triển ứng dụng dành cho thiết bị di động đã tăng trưởng đều đặn trong vài năm qua. Hầu như tất cả mọi người trên trái đất đều có điện thoại di động, vì vậy số lượng người dùng rất lớn. Ngày nay, bạn có thể tìm thấy một ứng dụng cho hầu hết mọi thứ. Có khá nhiều con đường bạn có thể thực hiện nếu muốn tạo một ứng dụng dành cho thiết bị di động. Bạn có thể chọn đi theo hướng Native, có nghĩa là sử dụng Swift để tạo ứng dụng IOS hoặc Kotlin để tạo ứng dụng Android. Đây là các ngôn ngữ lập trình chính thức mà Apple và Google sử dụng, vì vậy bạn có thể mong đợi sự hỗ trợ của các bên và các tính năng sẽ update thường xuyên.

 • Ngoài ra, bạn có thể chọn con đường đa nền tảng và sử dụng Flutter hoặc React Native. Thông thường, một nhà phát triển bản địa sẽ sử dụng Xcode và Swift để xây dựng các ứng dụng iOS và Android Studio và Kotlin cho các ứng dụng Android. Những công cụ này có thể áp dụng cho công việc đa nền tảng. Việc các nhà phát triển sử dụng môi trường phát triển tích hợp (IDE) như Visual Studio Code cũng khá phổ biến .

 • Tại thời điểm viết bài, React Native phổ biến hơn Flutter một chút, một phần nhờ vào sự liên kết của React Native với React-web framework phổ biến. React Native cũng đã tồn tại lâu hơn nên lượng người dùng của nó lớn hơn. Do đó, nhu cầu hiện tại đối với các công ty phát triển ứng dụng dựa trên React Native cao hơn so với các công ty phát triển ứng dụng dựa trên Flutter.
		
	c1.d:Flutter so với React Native: Hiệu suất
 • Cả Flutter và React đều là mã nguồn mở, có nghĩa là chúng được sử dụng miễn phí. Cả hai thư viện đều được duy trì tốt, như bạn mong đợi khi chúng được tạo bởi Google và Facebook. Có thể kiểm tra các ứng dụng được tạo bằng cả hai nền tảng, hầu như bằng cách sử dụng trình mô phỏng tích hợp trên máy tính của bạn cho iOS và Android hoặc nguyên bản trên điện thoại của bạn. Bạn sẽ cần một máy tính Apple nếu bạn định phát triển trên iOS vì SDK chỉ khả dụng trên máy tính Apple. Người dùng Windows và người dùng Linux được hưởng quyền lợi đó. Nhưng cũng có 1 chút vớt vát 😄 , bạn có thể phát triển các ứng dụng phát triển Android trên bất kỳ hệ điều hành nào.

 • Cả hai framework đều sử dụng tính năng host reload để bạn có thể thực hiện các thay đổi và xem chúng ngay lập tức. Điều này làm cho việc phát triển hiệu quả hơn vì bạn không phải tiếp tục dừng và khởi động ứng dụng của mình để xem các bản cập nhật.

 • Có một số cuộc tranh luận về việc liệu Flutter và React Native có thực sự có hiệu suất như Native hay không. Được coi là Native 100%, chúng sẽ cần được viết bằng ngôn ngữ mà chúng được thiết kế - cụ thể là Swift cho iOS và Kotlin / Java cho Android.

 • Công ty tạo ra Reflectly gần đây đã chuyển ứng dụng từ React Native sang Flutter và thấy hiệu suất tăng đáng kể . Đây là một ví dụ về sự cải tiến. Tuy nhiên, nó sẽ không giống nhau cho mọi ứng dụng; Có nhiều trường hợp cần xem xét, chẳng hạn như loại ứng dụng, cơ sở dữ liệu, điện thoại, hệ điều hành, v.v.
		
	c1.e:Flutter so với React Native: Hệ sinh thái nhà phát triển
 • Các dev quan tâm đến việc xây dựng ứng dụng Flutter có xu hướng tham khảo tài liệu chính thức . Tuy nhiên, trong trường hợp của React Native, bạn có một số tùy chọn. Bạn có thể sử dụng tài liệu chính thức hoặc bạn có thể sử dụng một số tài liệu khác, phổ biến nhất là Expo . Expo cung cấp nhiều tính năng và tùy chỉnh hơn, bao gồm cả thư viện biểu tượng tích hợp, trong khi các tài liệu chính thức của React Native lại đơn giản hơn.

 • Hệ sinh thái React Native đã trưởng thành hơn và có nhiều người dùng hơn kể từ khi JavaScript xuất hiện từ năm 1995. Ngược lại, Flutter được phát hành vào năm 2017. React có lẽ là frontend framework phổ biến nhất vào thời điểm hiện tại và có một cộng đồng rất tích cực trên các phương tiện truyền thông xã hội. Flutter không phải là slouch; tại thời điểm viết bài, nó có nhiều sao hơn React Native trên GitHub.

 • Cả Flutter và React Native đều đã được sử dụng trong các ứng dụng thương mại phổ biến. Flutter đã được sử dụng để tạo ra các ứng dụng cho Reflectly, Stadia, Baidu, Groupon và eBay. Trong khi đó, các ứng dụng cho Facebook, Instagram, Shopify và Discord được xây dựng bằng React Native .

 • Các con số cũng khá giống nhau trên các phương tiện truyền thông xã hội, với Flutter có nhiều người theo dõi hơn trên Twitter và React Native có lượng người theo dõi lớn hơn trên Reddit .
		
	=====> Bạn nên sử dụng Flutter hay React Native?
 • Không có người chiến thắng rõ ràng ở đây: cả Flutter và React đều có ưu và khuyết điểm, và lựa chọn phù hợp sẽ phụ thuộc vào kinh nghiệm của bạn cũng như mục tiêu và yêu cầu của dự án của bạn.

 • Nếu bạn đã biết JavaScript, viết ứng dụng di động trong React Native là điều không cần bàn cãi. Tuy nhiên, nếu bạn đang tìm kiếm hiệu suất và độ ổn định tốt hơn cũng như môi trường gắn kết hơn giữa các hệ sinh thái, bạn nên cân nhắc dùng thử Flutter.
	
	c2:So sánh ReactJS vs React Native
		c2.1: Khái quát
ReactJS và React Native có một lịch sử khá là thú vị:
		
 • Vào năm 2021, khi Facebook ads được mở rộng và có thêm nhiều tính năng mới, hấp dẫn hơn, team kỹ sư của Facebook nhận ra rằng việc cập nhập liên tục sẽ làm chậm đi tiến trình của họ.

 • Các thay đổi và cập nhật theo tầng nội dung buộc các nhà phát triển phải thiết kế lại toàn bộ ứng dụng. Khi quy mô của team mở rộng, các vấn đề cũng ngày càng tăng theo.

 • Họ có một model đúng nhưng UI cần phải cải tiến nhiều.

 • Cũng tại thời điểm đó, một kỹ sư của Facebook là Jordan Walke đã sử dụng XHP (một thư viện component HTML cho PHP) để tạo ra FaxJS, một nguyên mẫu đầu tiên của ReactJS.

 • Vào năm 2011, timeline của Facebook được phát triển bởi ReactJS và đây là một bước nhảy vọt.

 • Vào năm 2012, Instagram đã được Facebook mua lại và sau đó Reactjs cũng được sử dụng cho timeline của Insatgram.
 
	c2.2:Điểm khác biệt chính giữa ReactJS và React Native
		*Lợi thế của ReactJS
 • Dễ học và sử dụng: ReactJS dễ học và sử dụng hơn nhiều. Bất kỳ nhà phát triển nào xuất thân từ nền tảng JavaScript đều có thể dễ dàng hiểu và bắt đầu tạo ứng dụng web bằng React.
		
 • Tạo ứng dụng web động trở nên dễ dàng hơn: Để tạo một ứng dụng web động cụ thể bằng HTML rất khó, đòi hỏi mã hóa phức tạp, nhưng React JS đã giải quyết vấn đề đó và làm cho nó dễ dàng hơn. Nó cung cấp ít mã hóa hơn và cung cấp nhiều chức năng hơn.
		
 • Các thành phần có thể tái sử dụng: Một ứng dụng web ReactJS được tạo thành từ nhiều thành phần và mỗi thành phần có logic và điều khiển của nó. Những thành phần này có thể được tái sử dụng bất cứ nơi nào bạn cần. Mã có thể sử dụng lại giúp phát triển và bảo trì ứng dụng của bạn dễ dàng hơn.
		
 • Nâng cao hiệu suất: ReactJS cải thiện hiệu suất do DOM ảo. React Virtual DOM tồn tại hoàn toàn trong bộ nhớ và là đại diện cho DOM của trình duyệt web. Do đó, khi chúng tôi viết một thành phần React, chúng tôi đã không ghi trực tiếp vào DOM. Thay vào đó, chúng tôi đang viết các thành phần ảo phản ứng sẽ chuyển thành DOM, dẫn đến hiệu suất mượt mà và nhanh hơn.
 • Sự hỗ trợ của các công cụ tiện dụng : ReactJS hỗ trợ một bộ công cụ tiện dụng giúp cho công việc của các nhà phát triển trở nên dễ hiểu và dễ dàng hơn. Nó cũng cho phép bạn chọn các thành phần cụ thể và kiểm tra và chỉnh sửa các Đạo cụ và Trạng thái hiện tại của chúng.
		
		*Nhược điểm của ReactJS
 • Tốc độ phát triển cao: Như chúng ta đã biết, các khuôn khổ liên tục thay đổi rất nhanh. Các nhà phát triển không cảm thấy thoải mái khi thường xuyên học lại các cách làm việc mới. Họ có thể khó chấp nhận tất cả những thay đổi này với tất cả các bản cập nhật liên tục.
 
 • Tài liệu kém: Công nghệ React cập nhật và tăng tốc quá nhanh nên không có thời gian để tạo tài liệu thích hợp. Để khắc phục điều này, các nhà phát triển tự viết hướng dẫn với sự phát triển của các bản phát hành và công cụ mới trong các dự án hiện tại của họ.
		
 • Phần xem: ReactJS chỉ bao gồm các Lớp giao diện người dùng của ứng dụng và không có gì khác. Vì vậy bạn vẫn cần chọn một số công nghệ khác để có được một bộ công cụ hoàn chỉnh để phát triển trong dự án.

 • Được biết đến là thân thiện với SEO: Các khung JavaScript truyền thống có một vấn đề trong việc xử lý SEO. ReactJS khắc phục được vấn đề này, giúp các nhà phát triển dễ dàng điều hướng trên các công cụ tìm kiếm khác nhau. Đó là vì các ứng dụng ReactJS có thể chạy trên máy chủ, và DOM ảo sẽ hiển thị và trở lại trình duyệt như một trang web thông thường.
		
 • Lợi ích của việc có Thư viện JavaScript: Ngày nay, ReactJS đang trở nên phổ biến trong giới phát triển web. Nó cung cấp một thư viện JavaScript rất phong phú, cung cấp sự linh hoạt hơn cho các nhà phát triển web để lựa chọn theo cách họ muốn.

 • Phạm vi kiểm tra mã: Các ứng dụng ReactJS rất dễ kiểm tra. Nó cung cấp một phạm vi nơi nhà phát triển có thể kiểm tra và gỡ lỗi mã của họ với sự trợ giúp của các công cụ gốc.Cả ReactJS và React Native đều là những công cụ tuyệt vời để xây dựng và chuyển đổi nhanh UI phức tạp từ phiên bản cũ sang phiên bản mới. Điều này không khó cho những ai thích JavaScript. Tuy nhiên bạn cần nhớ là:
		
	====>Tóm lại :
 •React Native là một framework trong khi ReactJS là một thư viện JavaScript
 
 •React Native không sử dụng HTML
 
 •ReactJS và React Native đều dựa trên component-based
 
 •Bạn có thể viết các native mobile components trong React Native để tạo cảm giác là ứng dụng này thực sự dành cho thiết bị di động.
 
2. Xây dựng ứng dụng thương mại điện tử trong lĩnh vực nội thất

		2.1. Ý tưởng và mô tả hệ thống thương mại điện tử
		 Ý tưởng
		 
 Trong thời buổi hiện nay, sự phát triển của công nghệ đã mang đến nhiều mặt tiện ích hơn cho cuộc sống chúng ta. Trong đó có thể kể đến việc mua bán hàng hóa qua kênh 	online với những tính năng vượt trội như: Không giới hạn thời gian, địa điểm, chọn lựa sản phẩm, tham khảo giá cả, thanh toán đơn giản,…
 
 Mua bán trực tuyến đang ngày càng trở nên phổ biến hơn. Chỉ cần truy cập vào App/website bán hàng, cho dù là đang trong thời gian hày địa điểm nào, người mua hàng cũng có thể tìm được thông tin của sản phẩm, việc đặt hàng và thanh toán cũng tiết kiệm thời gian và đơn giản hơn. Điều này thuận tiện và tiết kiệm thời gian hơn nhiều so với việc phải tìm đến các của hàng bán lẻ nên khách hàng đang dần chuyển sang lựa chọn mua hàng trực tuyến nhiều hơn. Vì vậy, việc các doanh nghiệp xây dựng trang web bán hàng cho mình là điều quan trọng và cần thiết để gần gũi hơn với người tiêu dùng.
 
 Vì vậy, nhóm chúng em quyết định thiết kế một App bán hàng trực tuyến để tìm hiểu cách tạo ra 1 ứng dụng có tính chất thiết yếu trong tương lai, giúp bổ sung thêm kiến thức cho bản thân để vững bước hơn trong công việc sau khi tốt nghiệp.
 
		 Mô tả hệ thống
	
Ứng dụng hiện tại có hầu hết các tính năng của một ứng dụng bán hàng trực tuyến:

•Đăng nhập với tài khoản đăng ký hoặc với Facebook hay tài khoản Google.

•Sau khi đăng nhập, App sẽ hiện lên trang chủ (Home) với các sản phẩm tiêu biểu, người dùng có thể mua trực tiếp tại đây hoặc di chuyển vào danh sách (List) để tìm kiếm sản phẩn phù hợp.

• Ở mục danh sách, các sản phẩm sẽ được chia thành các danh mục riêng biệt, người dùng có thể chọn sản phẩm theo loại bằng cách này hoặc gõ tên sản phẩm vào thanh tìm kiếm để tra cứu.
 
• Sau khi chọn được sản phẩm muốn mua, sản phẩm ấy sẽ được chuyển vào trang thanh toán, tại đây người dùng có thể chọn thêm số lượng, cách thức thanh toán hoặc loại bỏ sản phẩm ra khỏi cửa hàng.
	
	2.2. Các thành phần trong hệ thống và chức năng 
	 Xây dựng website quản trị sản phẩm(frame Yii2, php, mysql) hoặc sử dụng nền tảng firebase.
• Đăng nhập cho quản trị viên

•Quản lý sản phẩm

• Quản lý đơn hàng

• Quản lý thông báo 
		
	 Xây dựng App mobile (phần chính)
• Đăng nhập đăng ký, quản lý thông tin cá nhân.

• Xem tìm kiếm sản phẩm

• Đặt hàng quản lý đơn hàng

• Chức năng thông báo

• Chức năng thống kê. 
	
	 Yêu cầu kĩ thuật
• Thực hiện phân tích thiết kế ứng dụng viết vào tài liệu. 

•Sử dụng react-native xây dựng 2 nền tảng android, ios 

• Sử dụng các thư viện bên thứ 3 như (firebase, google …). 

• Thực hiện các chức năng cơ bản của một ứng dụng thương mại điện tử. 

• Nâng cao: có thể xây dựng thư viện và sử dụng.
