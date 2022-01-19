
# :large_blue_diamond: Giới thiệu:
Bài tập cuối kì môn Công nghệ phần mềm 2021.
- Trường: Đại Học Khoa học Tự Nhiên - Đại học Quốc Gia Hà Nội.
- Khoa: Toán - Cơ - Tin học.
# :large_blue_diamond: Thành viên nhóm:
1) [Lê Tú Anh]
2) [Phạm Văn Cường]
3) [Nguyễn Đức Anh]
4) [Đỗ Huy Hoàng]
5) [Vũ Huy Hải]
# :large_blue_diamond:Đề Bài:
# Tìm hiểu lập trình React-Native, xây dựng ứng dụng thương mại điện tử trong lĩnh vực nội thất:

## 1. Tìm hiểu về lập trình di động và lập trình react-native 

## a.Tìm hiểu lập trình di động -------- Cường
### i. Các khái niệm trong lập trình di dộng 
		
• **Khái niệm về CNTT nói chung và Lập trình Di động nói riêng :**

Công nghệ thông tin: là một ngành sử dụng hệ thống các thiết bị và máy tính, bao gồm phần cứng, phần mềm, để cung cấp giải pháp xử lý thông tin trên nền công nghệ cho các cá nhân, tổ chức có yêu cầu.

Ngày nay, với sự bùng nổ dân số, cùng với sự phát triển công nghệ thông tin như vũ bão, máy tính hay laptop dần được con người thu nhỏ lại nhưng vẫn đảm bảo có đầy đủ các chức năng như một máy tính cá nhân. Vì vậy, các dòng điện thoại smartphone lần lượt ra đời, có thể kể đến một số thiết bị di động nổi tiếng như IPhone 5S xài hệ điều hành iOS của hãng Apple, Samsung Galaxy S4 xài hệ điều hành Android của hãng Samsung, Nokia Lumia 930 xài hệ điều hành Windows Phone của Microsoft, …. Và để tăng số lượng người sử dụng smartphone, download ứng dụng từ AppStore thì các hãng thiết bị di động nổi tiếng trên vô Công nghệ thông tin cùng khuyến khích các nhà lập trình viên lên ý tưởng và làm ra một ứng dụng dựa trên ý tưởng của mình. Từ đó, môn học lập trình trên thiết bị di động (TBDĐ) ra đời để các nhà lập trình viên tạo ra được nhiều ứng dụng đa dạng đáp ứng được nhu cầu của nhiều tầng lớp người sử dụng.

**Lập trình cho các thiết bị di động có thể hiểu đơn giản và khái quát như sau:**

Trước hết thế nào là lập trình và lập trình là gì thì có thể hiểu đơn giàn là thiết bị máy móc (Devices) không tự biết phải làm gì đề phục vụ một nhu cầu nào đó của con người. Nó chỉ có thể làm những gì được định sẵn với khả năng thực hiện nhanh và chính xác hơn con người (Keeper sẽ nói về AI - Artificial Intelligence sau, AI = Trí tuệ nhân tạo, khái niệm giúp máy móc thiết bị tự quyết định và tự đưa ra giải pháp tùy tình huống mà không cần con người vạch sẵn)

Vì vậy nếu muốn thiết bị cho ra kết quả của phép nhân từ 2 con số thì người lập trình phải viết 1 đoạn code cung cấp cho thiét bị 2 variables(biến số) represents (đại diện) cho 2 con số muốn tính toán(Calculate) và cách thức (Method) để cho ra kết quả phép nhân. Thiết bị khi đó không cần biết 2 con số là gì mà nó chỉ biết khi người sử dụng nhập 2 con số và click Enter thì nó chỉ việc lấy 2 số này và áp dụng công thức đã được lập trình viên định sẵn và trả về kết quả. Như vậy nếu chỉ có công thức nhân mà không có công thức cộng trừ hay chia thì nó chỉ có thể cho ra kết quả nhân. Do đó muốn nó cho ra kết quả cộng trừ hay chia thì người lập trình buộc phải cung cấp thêm cho nó công thức công trừ hay chia.

Lập trình cho các thiết bị di động như Mobile Phones, Portable Devices, Mobility Devices...Được gọi là lập trình di động.

Lập trình ứng dụng di động là viết ngôn ngữ lập trình (code) để xây dựng các tiện ích, chương trình, app, hệ điều hành trên mobile. Hiện nay, có 2 hệ điều hành trên Smartphone phổ biến nhất là Android và IOS.

Lập trình ứng dụng di động mang đến một không gian mua sắm, tin tức, giải trí thu nhỏ ngay trên Smartphone của mỗi cá nhân.


### ii. Xu hướng phát triển lập trình di động:
		
Khi Điện thoại thông minh được “phổ cập” thì sự phát triển của Mobile App – Ứng dụng di động cũng là một điều tất yếu. Ngày càng có nhiều ứng dụng di động ra đời. Ta có thể kể đến các app như mạng xã hội, mua sắm, ví điện tử cho đến các ứng dụng về sức khỏe, đặt hàng… 

**Xu hướng phát triển Mobile App hiện nay:**

Giống như bất kỳ “trend” nào, xu hướng phát triển Mobile App cũng luôn biến đổi. Vì vậy, doanh nghiệp cũng phải nhanh nhạy nắm bắt và điều chỉnh phù hợp. Một số xu hướng phát triển Mobile App năm 2021 đã xuất hiện một thời gian, nhưng một số khác lại là những xu hướng mới nhất.

**Cloud-Native:**

Cloud native là một cách tiếp cận để xây dựng Mobile App bằng cách khai thác các lợi thế của mô hình điện toán đám mây. Cloud-native applications là các ứng dụng được viết trên môi trường cloud, thay vì xây dựng trên các trung tâm dữ liệu truyền thống. Mọi thứ trên các ứng dụng này đều do các nhà cung cấp giải pháp Cloud như AWS, Google Cloud hoặc Azure xử lý.

Cloud-native mang đến nhiều lợi ích cho các nhà phát triển và doanh nghiệp. Ví dụ như Google Cloud serverless tooling cho phép mở rộng quy mô tự động tùy thuộc vào lưu lượng truy cập trang web.

**Internet of Things:**

Theo dự báo, thị trường IoT ở Mỹ đến năm 2022 sẽ vượt 500 tỷ USD. Và phần lớn thị phần này thuộc về phân khúc điện tử tiêu dùng. Công nghệ IoT đang tác động đến cách con người tương tác với nhau. Đồng thời, nó còn tác động mạnh mẽ đến cách người ta sống trong nhà của họ bằng việc tương tác với các thiết bị gia đình. Có thể thấy rằng, lĩnh vực tác động nổi bật nhất của IoT là nhà thông minh. Số người dùng smartphone để điều khiển thiết bị gia đình thông qua các ứng dụng trên điện thoại ngày càng tăng. Các dự báo cho biết đến năm 2030 sẽ có khoảng 50 tỷ thiết bị IoT được sử dụng trên khắp thế giới. Nghĩa là, một mạng lưới khổng lồ giữa các thiết bị sẽ được tạo ra và kết nối với nhau. Hơn nữa, IoT có tiềm năng chia sẻ dữ liệu, nó chắc chắn sẽ thu hút sự chú ý của ngành công nghiệp ứng dụng.

**Ví điện tử – Mobile Wallet:**

Ví điện tử đang ngày một trở nên phổ biến trong bối cảnh chuyển đổi số đang diễn ra mạnh mẽ. Ở Việt Nam, các ví điện tử như Momo, ShopeePay, ZaloPay… cũng đang trong quá trình tiếp cận và mở rộng thị trường. Ví điện tử mang đến sự tiện lợi, dễ sử dụng, tốc độ xử lý nhanh, nhiều ưu đãi… Vì vậy, người dùng đang dần chấp nhận loại hình thanh toán mới này. Chính vì thế, tiềm năng phát triển của thị trường vẫn còn khá lớn. Tuy nhiên, các nhà phát triển cũng cần cân nhắc về yếu tố bảo mật, rào cản lớn nhất đối với người dùng.

**Trí tuệ nhân tạo (AI) & Machine Learning trong Mobile App:**

AI và Machine Learning đã được đưa vào trong các Mobile App. Những tính năng thường gặp có thể kể đến như Chatbots, nhận dạng khuôn mặt hay tìm kiếm bằng giọng nói. Trong tương lai gần, việc sử dụng camera có tích hợp AI, hay dịch giọng nói sẽ còn phổ biến hơn.

Tương lai của AI sẽ được ứng dụng để:

	Nhận dạng hình ảnh, phân loại và gắn thẻ
	
	Xác định vật thể, phân loại và theo dõi
	
	Xử lý dữ liệu
	
	Dự báo
	
**Chatbots:**

Chatbots đã và đang “len lỏi” vào cuộc sống hàng ngày của chúng ta. Những câu hỏi thường gặp như thời gian mở cửa, menu, giá dịch vụ… có thể được trả lời một cách tự động. Người bán vui vẻ vì không phải trả lời lặp lại. Người mua cũng hài lòng vì được phản hồi nhanh chóng. Ứng dụng “My Starbucks Barista” là một ví dụ thành công. Nó cho phép người dùng đặt và thanh toán qua việc giao tiếp bằng giọng nói với trợ lý ảo này. Ở Việt Nam, Chatbots được ứng dụng phổ biến với Facebook Messenger hay các trang TMDT.

**Công nghệ thực tế ảo – thực tế tăng cường (AR-VR):**

AR-VR tiếp tục là xu hướng phát triển Mobile App của năm 2021. Pokemon Go! là cú hích lớn cho việc đưa AR vào Mobile game. Giờ đây, nó đã xuất hiện ở nhiều loại ứng dụng hơn như các app chụp ảnh, làm đẹp…


### iii. Các loại lập trình di động: lập trình native, đa nền tảng … 
### iv. Các nền tảng lập trình di đông.

	b. Tìm hiểu lập trình react-native -------- Đức Anh
		i. Các khái niệm trong react-native. 
		
c Components : là một khái niệm cơ bản của cả React và React native. Chính việc chia nhỏ ứng dụng thành các components nhỏ tạo nên tính tái sử dụng cao và khả năng mở rộng của chúng.
		
• Props : là viết tắt của Properties. Một điều mà bạn cần phải nhớ khi sử dụng props đó là không bao giờ nên thay đổi giá trị của nó, hay nói cách khác, đây là một dữ liệu cố định, bất biến.

Các component nhận props từ component cha. Bạn không được thay đổi giá trị của props trong các component này mà chỉ được phép đọc giá trị ra thôi. Trong React thì dữ liệu sẽ đi theo một chiều, có nghĩa là từ component cha đến các component con.

• State : State thì hoạt động khác với Props. State là dữ liệu nội bộ của một Component, trong khi props là dữ liệu được truyền cho Component. Chính vì vậy chúng ta hoàn toàn có thể thay đổi state, và coi nó là một kiểu dữ liệu có thể thay đổi. Vì đặc điểm này nên chúng ta hay sử dụng State để thay đổi dữ liệu của view, binding data lại view khi có thay đổi. Nhưng chúng ta không dùng this.state để gán lại giá trị thay đổi cho nó, mà chúng ta sẽ dùng this.setState. Function này sẽ trigger cho class rằng hãy render lại component và các component con của nó, còn this.state thì không.

		ii. Các thư viện.
		
• Redux

Redux js là một thư viện Javascript giúp tạo ra thành một lớp quản lý trạng thái của ứng dụng. Được dựa trên nền tảng tư tưởng của ngôn ngữ Elm kiến trúc Flux do Facebook giới thiệu, do vậy Redux thường là bộ đôi kết hợp hoàn hảo với React.

		iii. Các xây dựng thư viện, sử dụng thư viện đang có, xây dựng thư viện native (java cho android, swift cho ios). 
		iv. Ưu điểm nhược điểm v. Xu thế lập trình react-native hiện tại.

	c. So sánh lập trình react-native với các nền tảng khác ------ Hải
		*So sánh Flutter và React Native
		c1:Khái quát : Hai Framework phát triển ứng dụng di động đa nền tảng phổ biến nhất hiện nay là Flutter và React Native . Hai “thế lực” này được hỗ trợ bởi hai trong số những công ty công nghệ lớn nhất trên thế giới: Flutter được tạo ra bởi Google và React Native được tạo ra bởi Facebook.
		*Flutter
		Flutter là một framwork giao diện người dùng đa nền tảng do Google phát triển. Nó được phát hành lần đầu tiên vào tháng 5 năm 2017 và đã dần trở nên phổ biến trong những năm qua.

		Một trong những điểm hấp dẫn chính của Flutter là nó cho phép bạn tạo các ứng dụng đa nền tảng bằng cách sử dụng một ngôn ngữ lập trình duy nhất. Theo truyền thống, nếu một công ty muốn tạo một ứng dụng có sẵn trên web, thiết bị di động và máy tính để bàn, thì công ty đó sẽ phải sử dụng nhiều hơn một công cụ để đạt được mục tiêu đó. Ví dụ: cần phải thuê một dev chuyên về phát triển web, một dev khác có kinh nghiệm xây dựng ứng dụng dành cho máy tính để bàn và một dev khác nữa chuyên dụng để xây dựng ứng dụng cho iOS và Android. Trong tình huống như vậy, bạn có thể có một dev sử dụng React để xây dựng trang web, một dev sử dụng C # và Java để tạo phiên bản dành cho máy tính để bàn và một dev khác sử dụng Kotlin hoặc Swift để tạo ứng dụng Android và iOS tương ứng. Điều này đòi hỏi rất nhiều nhân lực cũng như sự đồng bộ giữa các nền tảng (vd câu lệnh query, hiển thị…)

Với Flutter, các công ty có thể thuê một dev để tạo ứng dụng trên các nền tảng chỉ với ngôn ngữ lập trình-framwork . Điều này cắt giảm đáng kể thời gian và tài nguyên cần thiết để khởi chạy và duy trì một ứng dụng.
		*React Native 
		React Native là một framework đa nền tảng do Facebook tạo ra. Nó làm cho việc tạo các ứng dụng đa nền tảng trở nên khá đơn giản vì codebase về cơ bản được viết bằng JavaScript. Điều này làm giảm rào cản gia nhập đối với các nhà phát triển JavaScript vì họ không cần phải học một ngôn ngữ hoàn toàn xa lạ.

Việc phát triển web đã có từ nhiều năm và hầu hết các nhà phát triển web đã sử dụng JavaScript trong phần lớn sự nghiệp của họ. Sự phát triển di động vẫn còn khá mới mẻ, nhưng hệ sinh thái đã trưởng thành khá nhiều trong vài năm qua. Nếu bạn đã biết JavaScript, thì con đường học tập để phát triển ứng dụng dành cho thiết bị di động bằng cách sử dụng React Native sẽ không quá khó khăn.

Ngày nay, nhiều công ty đang sử dụng React Native để phát triển ứng dụng. Microsoft gần đây đã phát triển ứng dụng cửa hàng Xbox mới của mình bằng cách sử dụng React Native, là một ví dụ nổi bật. Giống như Flutter, React Native giúp bạn có thể tạo ứng dụng trên nhiều nền tảng khác nhau bằng cách sử dụng một mã code duy nhất.
		c1.b: Sự khác biệt chính giữa Flutter và React Native
		Flutter và React Native có rất nhiều điểm tương đồng, nhưng chúng cũng khá khác nhau ở một số điểm chính.

Đối với người mới bắt đầu, Flutter sử dụng ngôn ngữ lập trình Dart trong codebase của nó trong khi React Native sử dụng JSX, viết tắt của JavaScript XML. Cả hai ngôn ngữ đều dựa trên kiểu cú pháp kiểu C và tuân theo các nguyên tắc hướng đối tượng. Điểm chung này có nghĩa là Flutter và React Native về cơ bản giống nhau về thiết kế và code cũng rất giống nhau.

Lập trình dynamic so với static Có một sự khác biệt đáng kể khi nói đến ngôn ngữ lập trình cốt lõi. Bản chất JavaScript là động. Điều này có nghĩa là bạn có thể thay đổi giá trị của nhiều kiểu dữ liệu khác nhau, điều này làm cho nó rất linh hoạt. Dart vừa động vừa tĩnh, điều này cho phép nó có được những điều tốt nhất của cả hai loại lập trình trên.

Một ngôn ngữ được nhập tĩnh thường được coi là an toàn hơn nhiều vì nó buộc bạn phải khai báo và sử dụng đúng kiểu dữ liệu. Ví dụ, bạn không thể gán một số cho một chuỗi; làm như vậy sẽ tạo ra một lỗi.

Tĩnh nghĩa là bạn có thể gặp ít lỗi hơn. Có thể thực thi thêm tính năng kiểm tra lỗi và an toàn kiểu với JavaScript nếu bạn chọn sử dụng TypeScript, thay vào đó là một tập hợp siêu cú pháp nghiêm ngặt của JavaScript.
		*Layout
Flutter sử dụng kiểu widget để xây dựng giao diện người dùng trong khi React Native sử dụng JavaScript và JSX. Các widget Flutter được tạo sẵn, vì vậy về mặt kỹ thuật, bạn không cần phải tạo các widget tùy chỉnh của riêng mình trừ khi bạn muốn. Vì chúng được tạo và thử nghiệm bởi Google, bạn không cần phải lo lắng về vấn đề không tương thích.
nếu bạn đang sử dụng một ngôn ngữ lập trình như Swift để phát triển ứng dụng dành cho thiết bị di động, bạn thường không thể thấy mã nguồn mà Apple đã sử dụng để tạo các thành phần giao diện người dùng, chẳng hạn như các nút. Ngược lại, với Flutter, mã có thể xem được nên bạn có thể thấy cách Google tạo ra tất cả các tiện ích.

Flutter và React Native có điểm chung khi xây dựng bố cục ở chỗ cả hai đều sử dụng CSS Flexbox . Cách họ triển khai nó là khác nhau, nhưng miễn là bạn biết Flexbox, bạn sẽ không gặp bất kỳ vấn đề nào khi xây dựng bố cục cho ứng dụng của mình. Nhóm làm việc trên Flutter cũng đã làm việc trên các công cụ dành cho nhà phát triển cho trình duyệt Google Chrome, giúp chuyển đổi nhanh chóng vì các công cụ gỡ lỗi khá giống nhau.
		*Tại sao phát triển ứng dụng di động lại phổ biến như vậy?
Lĩnh vực phát triển ứng dụng dành cho thiết bị di động đã tăng trưởng đều đặn trong vài năm qua. Hầu như tất cả mọi người trên trái đất đều có điện thoại di động, vì vậy số lượng người dùng rất lớn. Ngày nay, bạn có thể tìm thấy một ứng dụng cho hầu hết mọi thứ. Có khá nhiều con đường bạn có thể thực hiện nếu muốn tạo một ứng dụng dành cho thiết bị di động. Bạn có thể chọn đi theo hướng Native, có nghĩa là sử dụng Swift để tạo ứng dụng IOS hoặc Kotlin để tạo ứng dụng Android. Đây là các ngôn ngữ lập trình chính thức mà Apple và Google sử dụng, vì vậy bạn có thể mong đợi sự hỗ trợ của các bên và các tính năng sẽ update thường xuyên.

Ngoài ra, bạn có thể chọn con đường đa nền tảng và sử dụng Flutter hoặc React Native. Thông thường, một nhà phát triển bản địa sẽ sử dụng Xcode và Swift để xây dựng các ứng dụng iOS và Android Studio và Kotlin cho các ứng dụng Android. Những công cụ này có thể áp dụng cho công việc đa nền tảng. Việc các nhà phát triển sử dụng môi trường phát triển tích hợp (IDE) như Visual Studio Code cũng khá phổ biến .

Tại thời điểm viết bài, React Native phổ biến hơn Flutter một chút, một phần nhờ vào sự liên kết của React Native với React-web framework phổ biến. React Native cũng đã tồn tại lâu hơn nên lượng người dùng của nó lớn hơn. Do đó, nhu cầu hiện tại đối với các công ty phát triển ứng dụng dựa trên React Native cao hơn so với các công ty phát triển ứng dụng dựa trên Flutter.
		*Flutter so với React Native: Hiệu suất
Cả Flutter và React đều là mã nguồn mở, có nghĩa là chúng được sử dụng miễn phí. Cả hai thư viện đều được duy trì tốt, như bạn mong đợi khi chúng được tạo bởi Google và Facebook. Có thể kiểm tra các ứng dụng được tạo bằng cả hai nền tảng, hầu như bằng cách sử dụng trình mô phỏng tích hợp trên máy tính của bạn cho iOS và Android hoặc nguyên bản trên điện thoại của bạn. Bạn sẽ cần một máy tính Apple nếu bạn định phát triển trên iOS vì SDK chỉ khả dụng trên máy tính Apple. Người dùng Windows và người dùng Linux được hưởng quyền lợi đó. Nhưng cũng có 1 chút vớt vát 😄 , bạn có thể phát triển các ứng dụng phát triển Android trên bất kỳ hệ điều hành nào.

Cả hai framework đều sử dụng tính năng host reload để bạn có thể thực hiện các thay đổi và xem chúng ngay lập tức. Điều này làm cho việc phát triển hiệu quả hơn vì bạn không phải tiếp tục dừng và khởi động ứng dụng của mình để xem các bản cập nhật.

Có một số cuộc tranh luận về việc liệu Flutter và React Native có thực sự có hiệu suất như Native hay không. Được coi là Native 100%, chúng sẽ cần được viết bằng ngôn ngữ mà chúng được thiết kế - cụ thể là Swift cho iOS và Kotlin / Java cho Android.

Công ty tạo ra Reflectly gần đây đã chuyển ứng dụng từ React Native sang Flutter và thấy hiệu suất tăng đáng kể . Đây là một ví dụ về sự cải tiến. Tuy nhiên, nó sẽ không giống nhau cho mọi ứng dụng; Có nhiều trường hợp cần xem xét, chẳng hạn như loại ứng dụng, cơ sở dữ liệu, điện thoại, hệ điều hành, v.v.
		*Flutter so với React Native: Hệ sinh thái nhà phát triển
Các dev quan tâm đến việc xây dựng ứng dụng Flutter có xu hướng tham khảo tài liệu chính thức . Tuy nhiên, trong trường hợp của React Native, bạn có một số tùy chọn. Bạn có thể sử dụng tài liệu chính thức hoặc bạn có thể sử dụng một số tài liệu khác, phổ biến nhất là Expo . Expo cung cấp nhiều tính năng và tùy chỉnh hơn, bao gồm cả thư viện biểu tượng tích hợp, trong khi các tài liệu chính thức của React Native lại đơn giản hơn.

Hệ sinh thái React Native đã trưởng thành hơn và có nhiều người dùng hơn kể từ khi JavaScript xuất hiện từ năm 1995. Ngược lại, Flutter được phát hành vào năm 2017. React có lẽ là frontend framework phổ biến nhất vào thời điểm hiện tại và có một cộng đồng rất tích cực trên các phương tiện truyền thông xã hội. Flutter không phải là slouch; tại thời điểm viết bài, nó có nhiều sao hơn React Native trên GitHub.

Cả Flutter và React Native đều đã được sử dụng trong các ứng dụng thương mại phổ biến. Flutter đã được sử dụng để tạo ra các ứng dụng cho Reflectly, Stadia, Baidu, Groupon và eBay. Trong khi đó, các ứng dụng cho Facebook, Instagram, Shopify và Discord được xây dựng bằng React Native .

Các con số cũng khá giống nhau trên các phương tiện truyền thông xã hội, với Flutter có nhiều người theo dõi hơn trên Twitter và React Native có lượng người theo dõi lớn hơn trên Reddit .
		*Bạn nên sử dụng Flutter hay React Native?
Không có người chiến thắng rõ ràng ở đây: cả Flutter và React đều có ưu và khuyết điểm, và lựa chọn phù hợp sẽ phụ thuộc vào kinh nghiệm của bạn cũng như mục tiêu và yêu cầu của dự án của bạn.

Nếu bạn đã biết JavaScript, viết ứng dụng di động trong React Native là điều không cần bàn cãi. Tuy nhiên, nếu bạn đang tìm kiếm hiệu suất và độ ổn định tốt hơn cũng như môi trường gắn kết hơn giữa các hệ sinh thái, bạn nên cân nhắc dùng thử Flutter.
## 2. Xây dựng ứng dụng thương mại điện tử trong lĩnh vực nội thất
	a. Ý tưởng và mô tả hệ thống thương mại điện tử ----- Hoàng
	
	b. Các thành phần trong hệ thống và chức năng 
		 i. Xây dựng website quản trị sản phẩm(frame Yii2, php, mysql) hoặc sử dụng nền tảng firebase.
			1. Đăng nhập cho quản trị viên
			2. Quản lý sản phẩm
			3. Quản lý đơn hàng
			4. Quản lý thông báo 
		 ii. Xây dựng App mobile (phần chính)
			1. Đăng nhập đăng ký, quản lý thông tin cá nhân.
			2. Xem tìm kiếm sản phẩm
			3. Đặt hàng quản lý đơn hàng
			4. Chức năng thông báo
			5. Chức năng thống kê. 
	c. Yêu cầu kĩ thuật 
		i. Thực hiện phân tích thiết kế ứng dụng viết vào tài liệu. 
		ii. Sử dụng react-native xây dựng 2 nền tảng android, ios 
		iii. Sử dụng các thư viện bên thứ 3 như (firebase, google …). 
		iv. Thực hiện các chức năng cơ bản của một ứng dụng thương mại điện tử. 
		v. Nâng cao: có thể xây dựng thư viện và sử dụng.
