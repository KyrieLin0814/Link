<template>
	<div class="body-container">
		<div v-if="helpFlag == 1">
			
			<!--关于我们-->
			<div v-if="langCn">
				<h4>关于我们</h4>
				<div class="textContent">
					领科wx.linksfield.net是全球领先的 SoftSIM提供商，我们与主流的电信商合作，并提供整合性的全球连网服务、RSP (SM/SR)平台、以及CMP(Connectivity Management Platform)平台。我们能将带有IMSI的SoftSIM于设备制造过程中内嵌于设备内。我们的一站式SIM解决方案，让设备供货商无论在任何地点或各式的应用服务，都可以启用连网服务，并且根据使用情形以及网络可用性，最佳化的选出最合适的网络。领科的RSP平台在必要时可更改设定文档。同时，CMP平台提供图像化仪表板以及API，使得设备商可以时时对SIM和其数据使用做到管理、监测、和控制。除了SoftSIM和CMP平台之外，领科在不同的IOT硬件平台上提供丰富的固件开发经验。我们已经在主流的2G/3G/4G的通讯芯片和模块集成了SoftSIM/DUAL SIM/ESIM。藉由提供turnkey解决方案，让合作伙伴可在短时间内集成并启动全球连网。
				</div>			
			</div>
			<div v-else>
				<h4>ABOUT US</h4>
				<div class="textContent">
					Links Field Networks（wx.linksfield.net）, a global leading SoftSIM provider, cooperates with mainstream carries to offer global connectivity , RSP (SM/SR) platform and CMP (Connectivity Management Platform) in one solution. SoftSIM with IMSI is embedded to the device during manufacturing. 
					</br>
					This one-stop SIM solution can enable connectivity for devices vendors to deploy devices regardless of location or application. Selection for the most appropriate network is optimised based on usage and availability. 
					</br>
					Links Field's RSP platform enables change of profiles when necessary. While CMP platform provides graphical dashboard and APIs. Device vendors can manage , monitor, control SIM and data usage in real time.
					</br>
					Links Field Networks offers rich firmware development experience in different IoT hardware platform besides SoftSIM/DUAL SIM/ESIM and CMP platform. We have integrated SoftSIM into mainstream 2G/3G/4G cellular chipset and modules. It is a turnkey solution and we can offer partners short deployment time for global connectivity.
				</div>
			</div>
		</div>
		
		<!--联系我们-->
		<div v-if="helpFlag == 2">
			<div v-if="langCn">
				<h4>联系我们</h4>
				<div class="textContent">如果您有任何问题或疑虑，请随时与我们联系。</br>
					我们很乐意听取您的意见，请联系我们：</br>
					香港总部</br>
					香港铜锣湾谢斐道482号信诺环球保险中心1005室</br>
					深圳办事处</br>
					深圳福田泰然九路一号盛唐商务大厦西座九楼911室</br>
					北京办事处</br>
					北京朝阳区大望路现代城C座606</br>
					上海办事处</br>
					上海市徐汇区宜山路900号B栋853</br>
					其它办事处</br>
					新加坡和英国</br>
					</br>
					销售：sales@linksfield.net</br>
					技术支持：supports@linksfield.net</br>
					客服电话：010-84681018</div>
			</div>
			<div v-else>
				<h4>CONTACT US</h4>
				<div class="textContent">If you have questions or concerns then please do not hesitate to get in contact with us. </br>
					We would love to hear from you, contact us on: </br>
					Hong Kong headquarters</br>
					Room 1005, CIGNA Global Insurance Centre, 482 Jaffe Road, Causeway Bay, Hong Kong</br>
					Shenzhen Office</br>
					Room 911, 9th Floor, West Block, Shengtang Business Building, No.1 Tairan 9th Road, Futian, Shenzhen</br>
					Beijing Office</br>
					606, Block C, Modern City, Dawang Road, Chaoyang District, Beijing</br>
					Shanghai office</br>
					Building 853, Building B, 900 Yishan Road, Xuhui District, Shanghai</br>
					Other offices</br>
					Singapore and the UK </br>
					</br>
					Sales: sales@linksfield.net</br>
					Technical support: supports@linksfield.net</div>
			</div>
		</div>
		
		<!--知识产权-->
		<div v-if="helpFlag == 3">
			<div v-if="langCn">
				<h4>知识产权</h4>
				<div class="textContent">如果对可能存在侵犯知识产权的行为有任何疑虑或投诉，请发送电子邮件至gary@linksfiled.net，明确说明被指控违反的权利和被控产品。</br>
					（此电子邮件地址仅用于知识产权和法律问题。 其他请求可能无法获得响应。）</div>
			</div>
			<div v-else>
				<h4>INTELLECTUAL PROPERTY</h4>
				<div class="textContent">In the event of any concerns or complaints about possible violation of intellectual property rights, please send us an email at gary@linksfiled.net  , identifying with specificity the rights alleged to be violated and the accused product(s).</br>
					(This email address is just for intellectual property rights and legal issues. Other requests may not get respondence.)</div>
			</div>
		</div>
		
		<!--隐私政策-->
		<div v-if="helpFlag == 4">
			<div v-if="langCn">
				<h4>隐私政策</h4>
				<div class="textContent">
					<h5>隐私声明</h5>
					<p>
						我们严肃对待您的隐私，本隐私声明解释了http://wx.linksfield.net（统称“我们”，“我们”或“我们的”）如何收集，使用，共享和处理您的信息。
					</p>
					<h5>个人资料的收集和使用</h5>
					<p>
						个人数据是可用于直接或间接识别您身份的信息。个人数据还包括与可用于直接或间接识别您的信息相关联的匿名数据。个人数据不包括已被不可逆转地匿名或汇总的数据，因此无论是与其他信息相结合还是其他信息，它都无法使我们识别您的身份。
					</p>
					<h5>促进安全和保障</h5>
					<p>
						我们遵守合法性，合法性和透明度原则，在有限的目的范围内使用和处理最少的数据，并采取技术和管理措施来保护数据的安全性。我们使用个人数据来帮助验证帐户和用户活动，以及促进安全性，例如监控欺诈行为，调查可疑或潜在的非法活动或违反我们的条款或政策。此类处理基于我们在确保产品和服务安全方面的合法利益。
						</br>以下是我们可能收集的个人数据类型以及我们如何使用它的说明。
					</p>
					<h5>我们收集了哪些个人数据</h5>
					<p>
						1、您提供的数据：
						</br>我们收集您在使用我们的产品和服务或与我们互动时提供的个人数据，例如您创建帐户，联系我们，参与在线调查，使用我们的在线帮助或在线聊天工具。如果您进行购买，我们会收集与购买相关的个人数据。此数据包括您的付款数据，例如您的信用卡或借记卡号码和其他卡信息，以及其他帐户和身份验证信息，以及结算，运送和联系详细信息。
						</br>2、有关我们的服务和产品使用的数据：
						</br>当您访问我们的网站时，我们可能会收集有关您使用的设备类型，设备的唯一标识符，设备的IP地址，操作系统，您使用的Internet浏览器类型，使用信息，诊断信息以及来自或关于您安装或访问我们的产品或服务的计算机，电话或其他设备的位置信息。如果可用，我们的服务可能会使用GPS，您的IP地址和其他技术来确定设备的大致位置，以便我们改进我们的产品和服务。
					</p>
					<h5>我们如何使用您的个人数据</h5>
					<p>
						一般而言，我们使用个人数据来提供，改进和开发我们的产品和服务，与您沟通，为您提供有针对性的广告和服务，以及保护我们和我们的客户。
						</br>1、提供，改进和开发我们的产品和服务：
						我们使用个人数据来帮助我们提供，改进和开发我们的产品，服务和广告。这包括将个人数据用于数据分析，研究和审计等目的。此类处理基于我们为您提供产品和服务以及业务连续性的合法利益。如果您参加比赛或其他促销活动，我们可能会使用您提供的个人数据来管理这些计划。其中一些活动有其他规则，可能包含有关我们如何使用个人数据的更多数据，因此我们建议您在参与之前仔细阅读这些规则。
						</br>2、与您沟通：
						</br>在事先明确同意的前提下，我们可能会使用个人数据向您发送与我们自己的产品和服务相关的营销信息，与您就您的帐户或交易进行沟通，并告知您我们的政策和条款。如果您不再希望收到用于营销目的的电子邮件通信，请联系我们以选择退出。当您联系我们时，我们也可能会使用您的数据来处理和回复您的请求。在事先明确同意的情况下，我们可能会与第三方合作伙伴共享您的个人数据，第三方合作伙伴可能向您发送与其产品和服务相关的营销信息。在事先明确同意的情况下，我们可能会使用个人数据来个性化您对我们的产品和服务以及第三方网站和应用程序的体验，并确定我们的促销活动的有效性。
						注意：对于需要事先明确同意的上述数据的任何使用，请注意您可以通过联系我们撤销您的同意。
					</p>
					<h5>“Cookies”的定义</h5>
					<p>
						Cookie是用于在Web浏览器上存储信息的小块文本。 Cookie广泛用于在计算机，电话和其他设备上存储和接收标识符和其他信息。我们还使用其他技术，包括我们存储在您的网络浏览器或设备上的数据，与您的设备相关联的标识符以及其他软件，用于类似目的。在本Cookie声明中，我们将所有这些技术称为“Cookie”。
					</p>
					<h5>使用Cookies</h5>
					<p>
						我们使用cookie来提供，保护和改进我们的产品和服务，例如通过个性化内容，提供和测量广告，了解用户行为以及提供更安全的体验。请注意，我们可能使用的特定cookie会根据您使用的特定网站和服务而有所不同。
					</p>
					<h5>披露个人资料</h5>
					<p>
						我们向与我们合作的战略合作伙伴提供某些个人数据，以提供我们的产品和服务，或帮助我们向客户推销。个人数据仅由我们与这些公司共享，以提供或改进我们的产品，服务和广告;未经您事先明确同意，不得将其与第三方共享用于其营销目的。 
					</p>
					<h5>数据披露或存储，传输和处理</h5>
					<p>
						1、履行法律义务：
						</br>由于欧洲经济区的强制性法律或用户所在的国家/地区，存在或已经发生某些法律行为，并且需要履行某些法律义务。处理欧洲经济区居民的个人数据---如下所述，如果您居住在欧洲经济区（EEA），我们对您个人数据的处理将合法化：每当我们要求您同意处理您的个人数据时，此类处理根据“一般数据保护条例”（EU）第6（1）条（“GDPR”），将证明其合理性。
						</br>2、为了合理实施或应用本文：
						</br>我们可能会与所有关联公司共享个人数据。如果合并，重组，收购，合资，转让，分拆，转让，出售或处置我们业务的全部或任何部分，包括与任何破产或类似程序有关，我们可以转让任何和所有个人数据发送给相关第三方。如果我们真诚地确定披露是合理必要的，以保护我们的权利并寻求可用的补救措施，执行我们的条款和条件，调查欺诈或保护我们的运营或用户，我们也可能会披露个人数据。
						</br>3、法律合规与安全或保护其他权利
						</br>根据法律，法律程序，诉讼和/或您所在国家/地区内外的公共和政府机构的要求，我们可能需要披露个人数据。如果我们确定出于国家安全，执法或其他具有公共重要性的问题，我们也可能会披露个人数据，因此披露是必要或适当的。
					</p>
					<h5>孩子</h5>
					<p>
						我们的产品和服务面向成年人。因此，我们不会有意收集，使用或披露16岁以下儿童的数据。如果我们得知我们已经收集了16岁以下儿童的个人数据，或者根据司法管辖区的相应最低年龄，我们将采取措施删除数据尽快。如果您发现16岁以下的儿童向我们提供了个人数据，请立即联系我们。
					</p>
					<h5>你的权利</h5>
					<p>
						我们采取合理措施确保您的个人数据准确，完整和最新。您有权访问，更正或删除我们收集的个人数据。您还有权随时限制或反对进一步处理您的个人数据。您有权以结构化和标准格式接收您的个人数据。您可以向主管数据保护机构提出有关处理您的个人数据的投诉。为了保护您的个人数据的隐私和安全，我们可能会要求您提供数据，以便我们确认您的身份和访问此类数据的权利，以及搜索并向您提供我们维护的个人数据。在某些情况下，适用的法律或法规要求允许或要求我们拒绝提供或删除我们维护的部分或全部个人数据。您可以联系我们行使您的权利。我们将在合理的时间范围内回复您的请求，无论如何不到30天。
					</p>
					<h5>第三方网站和服务</h5>
					<p>
						当客户操作指向与我们有关系的第三方网站的链接时，由于第三方的隐私政策，我们不对此类政策承担任何义务或责任。我们的网站，产品和服务可能包含您访问第三方网站，产品和服务的链接或能力。我们不对这些第三方使用的隐私惯例负责，也不对其产品和服务包含的信息或内容负责。本隐私声明仅适用于我们通过我们的产品和服务收集的数据。我们建议您在继续使用其网站，产品或服务之前阅读任何第三方的隐私政策。
					</p>
					<h5>数据安全性，完整性和保留</h5>
					<p>
						我们使用合理的技术，管理和物理安全措施来保护和帮助防止未经授权访问您的数据，并正确使用我们收集的数据。除非法律要求或允许更长的保留期限，否则我们将保留您的个人数据，只要有必要实现本隐私声明中列出的目的。
					</p>
					<h5>本隐私声明的变更</h5>
					<p>
						我们可能会定期更改本隐私声明，以跟上新技术，行业惯例和监管要求等原因。您在隐私声明生效后继续使用我们的产品和服务意味着您接受修订后的隐私声明。如果您不同意修订后的隐私声明，请不要使用我们的产品或服务并联系我们关闭您可能创建的任何帐户。
					</p>
					<h5>联系我们</h5>
					<p>
						如果您对本隐私声明或其实施有任何疑问，请联系我们：
						</br>support@linksfield.net
					</p>
				</div>	
			</div>
			<div v-else>
				<h4>PRIVACY POLICY</h4>
				<div class="textContent">
					<h5>PRIVACY STATEMENT</h5>
					<p>
						We take your privacy seriously and this privacy statement explains how http://wx.linksfield.net (collectively, “we,” “us,” or “our”) collect, use, share and process your information.
					</p>
					<h5>Collection and Use of Personal Data</h5>
					<p>
						Personal data is information that can be used to directly or indirectly identify you. Personal data also includes anonymous data that is linked to information that can be used to directly or indirectly identify you. Personal data does not include data that has been irreversibly anonymized or aggregated so that it can no longer enable us, whether in combination with other information or otherwise, to identify you.
					</p>
					<h5>Promoting safety and security</h5>
					<p>
						We abide by the principles of legality, legitimacy, and transparency, use, and process the least data within a limited scope of purpose, and take technical and administrative measures to protect the security of the data. We use personal data to help verify accounts and user activity, as well as to promote safety and security, such as by monitoring fraud and investigating suspicious or potentially illegal activity or violations of our terms or policies. Such processing is based on our legitimate interest in helping ensure the safety of our products and services.
						</br>Here is a description of the types of personal data we may collect and how we may use it:
					</p>
					<h5>What Personal Data We Collect</h5>
					<p>
						ⅰ. Data you provide: 
						</br>We collect the personal data you provide when you use our products and services or otherwise interact with us, such as when you create an account, contact us, participate in an online survey, use our online help or online chat tool. If you make a purchase, we collect personal data in connection with the purchase. This data includes your payment data, such as your credit or debit card number and other card information, and other account and authentication information, as well as billing, shipping, and contact details.
						</br>ⅱ. Data about use of our services and products:
						</br>When you visit our websites, we may collect data about the type of device you use, your device's unique identifier, the IP address of your device, your operating system, the type of Internet browser that you use, usage information, diagnostic information, and location information from or about the computers, phones, or other devices on which you install or access our products or services. Where available, our services may use GPS, your IP address, and other technologies to determine a device's approximate location to allow us to improve our products and services.
					</p>
					<h5>How We Use Your Personal Data</h5>
					<p>
						Generally speaking, we use personal data to provide, improve, and develop our products and services, to communicate with you, to offer you targeted advertisements and services, and to protect us and our customers.
						</br>ⅰ. Providing, improving, and developing our products and services:
						</br> use personal data to help us provide, improve, and develop our products, services, and advertising. This includes using personal data for purposes such as data analysis, research, and audits. Such processing is based on our legitimate interest in offering you products and services and for business continuity. If you enter a contest, or other promotion, we may use the personal data you provide to administer those programs. Some of these activities have additional rules, which may contain further data about how we use personal data, so we encourage you to read those rules carefully before participating.
						</br>ⅱ. Communicating with you:
						</br>Subject to your prior express consent, we may use personal data to send you marketing communications in relation to our own products and services, communicate with you about your account or transactions, and inform you about our policies and terms. If you no longer wish to receive email communications for marketing purposes, please Contact Us  to opt-out. We also may use your data to process and respond to your requests when you Contact Us . Subject to your prior express consent, we may share your personal data with third party partners who may send you marketing communications in relation to their products and services. Subject to your prior express consent, we may use personal data to personalize your experience with our products and services and on third-party websites and applications and to determine the effectiveness of our promotional campaigns.
						</br>NOTE: For any of the uses of your data described above that require your prior express consent, note that you may withdraw your consent by contacting us.
					</p>
					<h5>Definition of "Cookies"</h5>
					<p>
						Cookies are small pieces of text used to store information on web browsers. Cookies are widely used to store and receive identifiers and other information on computers, phones, and other devices. We also use other technologies, including data we store on your web browser or device, identifiers associated with your device, and other software, for similar purposes. In this Cookie Statement, we refer to all of these technologies as "cookies."
					</p>
					<h5>Use of Cookies</h5>
					<p>
						We use cookies to provide, protect, and improve our products and services, such as by personalizing content, offering and measuring advertisements, understanding user behavior, and providing a safer experience. Please note that the specific cookies we may use vary depending on the specific websites and services you use.
					</p>
					<h5>Disclosure of Personal Data</h5>
					<p>
						We make certain personal data available to strategic partners that work with us to provide our products and services or help us market to customers. Personal data will only be shared by us with these companies in order to provide or improve our products, services, and advertising; it will not be shared with third parties for their own marketing purposes without your prior express consent.
					</p>
					<h5>Data Disclosure or Storage, Transfer, and Processing</h5>
					<p>
						ⅰ. Fulfilment of legal obligations:
						</br>Due to the mandatory laws of the European Economic Area or the country in which the user lives, certain legal acts exist or have occurred and certain legal obligations need to be fulfilled. Treatment of personal data of EEA residents ---As described below, if you reside within the European Economic Area (EEA), our processing of your personal data will be legitimized: Whenever we require your consent for the processing of your personal data such processing will be justified pursuant to Article 6(1) of the General Data Protection Regulation (EU) ("GDPR").
						</br>ⅱ. For the purpose of reasonable implementation or application of this article:
						</br>We may share personal data with all our-affiliated companies. In the event of a merger, reorganization, acquisition, joint venture, assignment, spin-off, transfer, or sale or disposition of all or any portion of our business, including in connection with any bankruptcy or similar proceedings, we may transfer any and all personal data to the relevant third party.  We may also disclose personal data if we determine in good faith that disclosure is reasonably necessary to protect our rights and pursue available remedies, enforce our terms and conditions, investigate fraud, or protect our operations or users.
						</br>ⅲ. Legal Compliance and Security or Protect Other Rights
						</br>It may be necessary—by law, legal process, litigation, and/or requests from public and governmental authorities within or outside your country of residence—for us to disclose personal data. We may also disclose personal data if we determine that for purposes of national security, law enforcement, or other issues of public importance, disclosure is necessary or appropriate.
					</p>
					<h5>Children</h5>
					<p>
						Our products and services are intended for adults. Accordingly, we do not knowingly collect, use, or disclose data from children under 16. If we learn that we have collected the personal data of a child under 16, or the equivalent minimum age depending on the jurisdiction, we will take steps to delete the data as soon as possible. Please immediately Contact Us  if you become aware that a child under 16 has provided us with personal data.
					</p>
					<h5>Your Rights</h5>
					<p>
						We take reasonable steps to ensure that your personal data is accurate, complete, and up to date. You have the right to access, correct, or delete the personal data that we collect. You are also entitled to restrict or object, at any time, to the further processing of your personal data. You have the right to receive your personal data in a structured and standard format. You may lodge a complaint with the competent data protection authority regarding the processing of your personal data.  To protect the privacy and the security of your personal data, we may request data from you to enable us to confirm your identity and right to access such data, as well as to search for and provide you with the personal data we maintain. There are instances where applicable laws or regulatory requirements allow or require us to refuse to provide or delete some or all of the personal data that we maintain. You may Contact Us to exercise your rights. We will respond to your request in a reasonable timeframe, and in any event in less than 30 days.
					</p>
					<h5>Third-Party Websites and Services</h5>
					<p>
						When a customer operates a link to a third-party website that has a relationship with us, we do not assume any obligation or responsibility for such policy because of the third party's privacy policy. Our websites, products, and services may contain links to or the ability for you to access third-party websites, products, and services. We are not responsible for the privacy practices employed by those third parties, nor are we responsible for the information or content their products and services contain. This Privacy Statement applies solely to data collected by us through our products and services. We encourage you to read the privacy policies of any third party before proceeding to use their websites, products, or services.
					</p>
					<h5>Data Security, Integrity, and Retention</h5>
					<p>
						We use reasonable technical, administrative, and physical security measures designed to safeguard and help prevent unauthorized access to your data, and to correctly use the data we collect. We will retain your personal data for as long as it is necessary to fulfill the purposes outlined in this Privacy Statement, unless a longer retention period is required or permitted by law.
					</p>
					<h5>Changes to this Privacy Statement</h5>
					<p>
						We may periodically change this Privacy Statement to keep pace with new technologies, industry practices, and regulatory requirements, among other reasons.  Your continued use of our products and services after the effective date of the Privacy Statement means that you accept the revised Privacy Statement. If you do not agree to the revised Privacy Statement, please refrain from using our products or services and Contact Us to close any account you may have created.
					</p>
					<h5>Contact Us</h5>
					<p>
						If you have any questions regarding this Privacy Statement or its implementation, here is how you can reach us:
						</br>support@linksfield.net
					</p>
				</div>
			</div>
		</div>
		
		
		<!--退货政策-->
		<div v-if="helpFlag == 5">
			<div v-if="langCn">
				<h4>退货政策</h4>
				<div class="textContent">
					<h5>退款说明</h5>
					<p>
						 我们接受在产品发货或生产之前取消订单。如果订单被取消，您将获得全额退款。如果产品已经发货，我们无法取消订单。
					</p>
					<h5>退货（如适用）</h5>
					<p>
						我们接受产品退货。客户有权在收到后14天内申请退货。
						</br>要有资格获得退货，您的商品必须未使用且条件与您收到的相同。它也必须是原始包装。要完成退货，我们需要收据或购买凭证。请不要将您的购买交还给制造商。
						</br>客户最多只需支付一次运费（包括退货）;不退还产品需要向消费者收取费用。
					</p>
					<h5>退款（如适用）</h5>
					<p>
						收到并检查您的退货后，我们会向您发送一封电子邮件，通知您我们已收到您退回的物品。我们还会通知您批准或拒绝退款。如果您获得批准，那么您的退款将被处理，并且信用卡将在一定天数内自动应用于您的信用卡或原始付款方式。
					</p>
					<h5>逾期或遗失退款（如适用）</h5>
					<p>
						如果您尚未收到退款，请先检查您的银行帐户。
						</br>然后联系您的信用卡公司，可能需要一些时间才能正式发布退款。接下来联系您的银行。在退款发布之前，通常会有一些处理时间。如果您已经完成了所有这些并且仍未收到退款，请通过sales@linksfield.net与我们联系
						</br>请联系我们的客户服务sales@linksfield.net获取返回的地址。
					</p>
				</div>
			</div>
			<div v-else>
				<h4>Return Policy</h4>
				<div class="textContent">
					<h5>Cancellation</h5>
					<p>
						We accept order cancellation before the product is shipped or produced. If the order is cancelled you will get full refund. We cannot cancel the order if the product is already shipped out. 
					</p>
					<h5>Returns (if applicable)</h5>
					<p>
						We accept return on products. Customers  has the right to apply for return within 14 days after the receipt. 
						</br>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer. 
						</br>Customers will only be charged once at most for shipping costs (this includes returns); No-restocking to be charged to the consumers for the return of the product.
					</p>
					<h5>Refunds (if applicable)</h5>
					<p>
						Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
					</p>
					<h5>Late or missing refunds (if applicable)</h5>
					<p>
						If you haven’t received a refund yet, first check your bank account again.
						</br>Then contact your credit card company, it may take some time before your refund is officially posted. Next contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at sales@linksfield.net 
						</br>Please contact our Customer service at  sales@linksfield.net  to get the returned address.
					</p>
				</div>
			</div>
		</div>


		<!--航运政策-->
		<div v-if="helpFlag == 6">
			<div v-if="langCn">
				<h4>航运政策</h4>
				<div class="textContent">我们的目标是为您提供最佳的送货方式，无论您住在哪里。 每天，我们都会向全球数百家客户提供服务，确保我们始终为您提供最高水平的响应能力。</br>
					</br>订单交付的时间范围分为两部分：
					</br>处理时间：3天
					</br>运输时间：无
				</div>
			</div>
			<div v-else>
				<h4>SHIPPING INFORMATION</h4>
				<div class="textContent">Our goal is to offer you the best shipping options, no matter where you live. Every day, we deliver to hundreds of customers across the world, ensuring that we provide the highest levels of responsiveness to you at all times.</br>
					</br>The time frame for order delivery is divided into two parts:
					</br>Processing time: 3DAYS
					</br>Shipping time: NONE
				</div>
			</div>
		</div>
		
		<!--服务条款-->
		<div v-if="helpFlag == 7">
			<div v-if="langCn">
				<h4>服务条款</h4>
				<div class="textContent">
					<h5>概述</h5>
					<p>
						本网站(wx.linksfield.net)由Links Field运营。在整个网站（wx.linksfield.net）中，术语“我们”，“我们”和“我们的”是指Links Field。 Links Field提供本网站，包括本网站向您（用户）提供的所有信息，工具和服务，条件是您接受此处所述的所有条款，条件，政策和通知。
						</br>通过访问我们的网站和/或从我们这里购买商品，您可以参与我们的“服务”并同意遵守以下条款和条件（“服务条款”，“条款”），包括那些附加条款和条件和政策在此引用和/或通过超链接提供。这些服务条款适用于本网站的所有用户，包括但不限于浏览器，供应商，客户，商家和/或内容贡献者。
						</br>在访问或使用我们的网站之前，请仔细阅读这些服务条款。访问或使用本网站的任何部分，即表示您同意遵守这些服务条款。如果您不同意本协议的所有条款和条件，则您不得访问本网站或使用任何服务。如果这些服务条款被视为要约，则接受明确限于这些服务条款。
						</br>添加到当前商店的任何新功能或工具也应遵守服务条款。您可以随时在此页面上查看最新版本的服务条款。我们保留通过发布更新和/或更改我们网站来更新，更改或替换这些服务条款的任何部分的权利。您有责任定期查看此页面以了解更改。您在发布任何更改后继续使用或访问本网站即表示接受这些更改。
						</br>第1节 - 在线商店条款
						</br>同意这些服务条款，即表示您至少是您所在国家/地区的成年年龄，或者您已达到您所在国家/地区的成年年龄，并且您已经同意我们允许您未成年人使用本网站。
						</br>您不得将我们的产品用于任何非法或未经授权的目的，也不得在使用本服务时违反您所在司法辖区的任何法律（包括但不限于版权法）。
						</br>您不得传播任何蠕虫或病毒或任何具有破坏性的代码。
						</br>违反或违反任何条款将导致您的服务立即终止。
						</br>第2节 - 一般条件
						</br>我们保留随时以任何理由拒绝向任何人提供服务的权利。
						</br>您了解您的内容（不包括信用卡信息）可能未经加密转移，并涉及（a）通过各种网络传输; （b）改变以符合并适应连接网络或设备的技术要求。在通过网络传输期间，信用卡信息始终是加密的。
						</br>您同意，未经我们明确书面许可，不得复制，复制，复制，出售，转售或利用本服务的任何部分，使用本服务，或访问本服务或提供服务的网站上的任何联系人。 。
						</br>本协议中使用的标题仅为方便起见，不会限制或以其他方式影响这些条款。
						</br>第3节 - 信息的准确性，完整性和及时性
						</br>如果本网站提供的信息不准确，完整或最新，我们概不负责。本网站上的资料仅供一般参考，不应依赖或作为决策的唯一依据，无需咨询主要，更准确，更完整或更及时的信息来源。任何依赖本网站资料的风险由您自行承担。
						</br>本网站可能包含某些历史信息。历史信息必然不是最新信息，仅供参考。我们保留随时修改本网站内容的权利，但我们没有义务更新我们网站上的任何信息。您同意监控我们网站的变更是您的责任。
						</br>第4节 - 对服务和价格的修改
						</br>我们产品的价格如有变更，恕不另行通知。
						</br>我们保留随时修改或终止服务（或其任何部分或内容）的权利，恕不另行通知。
						</br>对于本服务的任何修改，价格更改，暂停或终止，我们不对您或任何第三方承担任何责任。
						</br>第5节 - 产品或服务（如适用）
						</br>某些产品或服务可通过网站在线独家提供。这些产品或服务的数量有限，只能根据我们的退货政策退货或换货。
						</br>我们尽一切努力尽可能准确地显示出现在商店的产品的颜色和图像。我们无法保证您的计算机显示器的任何颜色显示都是准确的。
						</br>我们保留权利，但没有义务将我们的产品或服务的销售限制在任何人，地理区域或司法管辖区。我们可以根据具体情况行使此权利。我们保留限制我们提供的任何产品或服务的数量的权利。所有产品描述或产品定价均可随时更改，恕不另行通知，由我们自行决定。我们保留随时终止任何产品的权利。在本网站上提供的任何产品或服务的任何要约在禁止的情况下均无效。
						</br>我们不保证您购买或获得的任何产品，服务，信息或其他材料的质量符合您的期望，或者本服务中的任何错误都将得到纠正。
						</br>第6节 - 账单和账户信息的准确性
						</br>我们保留拒绝您与我们订购的任何订单的权利。我们可以自行决定限制或取消每人，每户或每个订单购买的数量。这些限制可能包括由同一客户帐户或相同客户帐户下的订单，相同的信用卡和/或使用相同帐单和/或送货地址的订单。如果我们更改或取消订单，我们可能会尝试通过联系订单时提供的电子邮件和/或帐单地址/电话号码来通知您。我们保留限制或禁止订单的权利，根据我们的判断，这些订单似乎由经销商，经销商或分销商提供。
						</br>您同意为我们在商店购买的所有商品提供最新，完整和准确的购买和帐户信息。您同意及时更新您的帐户和其他信息，包括您的电子邮件地址和信用卡号码以及到期日期，以便我们完成您的交易并根据需要与您联系。
						</br>有关详细信息，请查看我们的退货政策。
						</br>第7节 - 可选工具
						</br>我们可能会为您提供访问第三方工具的权限，我们既不监控也不控制或输入。
						</br>您承认并同意我们“按现状”和“可用”提供对此类工具的访问，不附带任何形式的任何保证，陈述或条件且无任何认可。对于您使用可选的第三方工具，我们不承担任何责任。
						</br>您通过本网站提供的可选工具的任何使用完全由您自行承担风险和自由裁量权，您应确保您熟悉并批准相关第三方提供商提供工具的条款。
						</br>我们将来还可能通过网站提供新的服务和/或功能（包括新工具和资源的发布）。此类新功能和/或服务也应遵守这些服务条款。
						</br>第8节 - 第三方链接
						</br>通过我们的服务提供的某些内容，产品和服务可能包含来自第三方的材料。
						</br>本网站上的第三方链接可能会将您引导至与我们无关的第三方网站。我们不负责审查或评估内容或准确性，我们不保证也不对任何第三方材料或网站或第三方的任何其他材料，产品或服务承担任何责任或义务。
						</br>对于因购买或使用与任何第三方网站相关的商品，服务，资源，内容或任何其他交易而造成的任何损害或损害，我们概不负责。请仔细阅读第三方的政策和做法，并确保在进行任何交易之前了解这些政策和做法。有关第三方产品的投诉，声明，疑虑或问题应直接发送给第三方。
						</br>第9节 - 用户评论，反馈和其他提交
						</br>如果，根据我们的要求，您发送某些特定提交内容（例如参赛作品）或未经我们提出请求，您可以发送创意，建议，提案，计划或其他材料，无论是在线，通过电子邮件，通过邮寄还是其他方式（统称“评论”），您同意我们可以在任何时间，无限制地编辑，复制，出版，分发，翻译和以其他方式使用您转发给我们的任何评论。我们现在并且没有义务（1）保密任何评论; （2）对任何意见支付赔偿金;或（3）回应任何意见。
						</br>我们可以（但没有义务）监控，编辑或删除我们自行决定的内容，包括非法，冒犯，威胁，诽谤，诽谤，色情，淫秽或其他令人反感的内容，或违反任何一方的知识产权或本服务条款。
						</br>您同意您的意见不会侵犯任何第三方的任何权利，包括版权，商标，隐私，个性或其他个人或所有权。您进一步同意，您的评论不会包含诽谤或其他非法，侮辱性或淫秽内容，或包含任何可能以任何方式影响服务或任何相关网站运营的计算机病毒或其他恶意软件。您不得使用虚假的电子邮件地址，伪装成您以外的其他人，或以其他方式误导我们或第三方的任何评论的来源。您对自己提出的任何意见及其准确性负全部责任。对于您或任何第三方发布的任何评论，我们不承担任何责任。
						</br>第10节 - 个人信息
						</br>您通过商店提交的个人信息受我们的隐私政策约束。
						</br>第11节 - 错误，不准确和遗漏
						</br>有时，我们网站或服务中可能包含与产品描述，定价，促销，优惠，产品运费，运输时间和可用性相关的印刷错误，不准确或遗漏的信息。如果服务或任何相关网站上的任何信息在任何时候不准确，我们保留更正或更新信息或取消订单的权利，恕不另行通知（包括您提交订单后） 。
						</br>我们没有义务更新，修改或澄清服务或任何相关网站上的信息，包括但不限于定价信息，法律要求除外。未在服务或任何相关网站上应用指定的更新或刷新日期，应表明服务或任何相关网站上的所有信息均已被修改或更新。
						</br>第12节 - 禁止使用
						</br>除了服务条款中规定的其他禁令外，您不得使用本网站或其内容：（a）用于任何非法目的; （b）要求他人进行或参与任何非法行为; （c）违反任何国际或英国的法规，规则，法律或地方法令; （d）侵犯或侵犯我们的知识产权或他人的知识产权; （e）基于性别，性取向，宗教，种族，种族，年龄，国籍或残疾，骚扰，虐待，侮辱，伤害，诽谤，诽谤，贬低，恐吓或歧视; （f）提交虚假或误导性资料; （g）上传或传播将以或可能以任何方式使用的病毒或任何其他类型的恶意代码，这些代码将影响服务或任何相关网站，其他网站或互联网的功能或操作; （h）收集或追踪他人的个人资料; （i）垃圾邮件，网络钓鱼，药剂，借口，蜘蛛，爬行或刮擦; （j）任何淫亵或不道德的目的;或（k）干扰或绕过服务或任何相关网站，其他网站或互联网的安全功能。我们保留因违反任何违禁用途而终止您使用本服务或任何相关网站的权利。
						</br>第13节 - 免责声明;责任限制
						</br>我们不保证，声明或保证您对我们服务的使用不会中断，及时，安全或没有错误。
						</br>我们不保证从使用服务中获得的结果将是准确或可靠的。
						</br>您同意我们可能会不定期地取消服务或随时取消服务，恕不另行通知。
						</br>您明确同意，您自行承担使用或无法使用服务的风险。通过服务向您提供的服务以及所有产品和服务（除非我们明确说明）以“原样”和“可用”的形式提供给您使用，没有任何明示或任何形式的保证或条件。暗示，包括所有暗示的适销性，适销性，适用于特定用途，耐久性，所有权和非侵权的保证或条件。
						</br>在任何情况下，我们，我们的董事，高级职员，员工，附属机构，代理商，承包商，实习生，供应商，服务提供商或许可方均不对任何伤害，损失，索赔或任何直接，间接，偶然，惩罚，特殊或任何形式的后果性损害，包括但不限于利润损失，收入损失，储蓄损失，数据丢失，重置成本或任何类似的损害，无论是基于合同，侵权（包括疏忽），严格责任还是其他原因造成的使用任何服务或使用服务获得的任何产品，或以任何方式与您使用服务或任何产品相关的任何其他声明，包括但不限于任何内容中的任何错误或遗漏，或任何由于使用服务或通过服务发布，传输或以其他方式提供的任何内容（或产品）而导致的任何类型的损失或损害，即使被告知其可能性。由于某些州或司法管辖区不允许排除或限制间接或附带损害的责任，因此在这些州或司法管辖区，我们的责任应限于法律允许的最大范围内。
						</br>第14节 - 赔偿
						</br>您同意对我们及我们的母公司，子公司，关联公司，合作伙伴，管理人员，董事，代理商，承包商，许可人，服务提供商，分包商，供应商，实习生和员工进行赔偿，辩护并使其免受任何索赔或要求的损害，包括合理的由于您违反本服务条款或其通过引用而包含的文件，或您违反任何法律或第三方权利而由任何第三方提出的律师费。
						</br>第15节 - 可分割性
						</br>如果本服务条款的任何规定被确定为非法，无效或不可执行，则此类规定仍应在适用法律允许的最大范围内强制执行，并且不可执行部分应视为与本条款中的服务，此类确定不得影响任何其他剩余条款的有效性和可执行性。
						</br>第16节 - 终止
						</br>在终止日期之前发生的双方的义务和责任在本协议终止后仍然有效。
						</br>除非您或我们终止，否则这些服务条款均有效。您可以随时通知我们您不再希望使用我们的服务，或者当您停止使用我们的网站时，终止这些服务条款。
						</br>如果我们自行判断您未能或我们怀疑您未能遵守本服务条款的任何条款或规定，我们也可以随时终止本协议，恕不另行通知，您将对所有应付金额负责至终止日期;和/或因此可能拒绝您访问我们的服务（或其任何部分）。
						</br>第17节 - 完整协议
						</br>我们未能行使或执行本服务条款的任何权利或规定，并不构成对此类权利或规定的放弃。
						</br>这些服务条款以及我们在本网站或本服务中发布的任何政策或操作规则构成您与我们之间的完整协议和理解，并管辖您对本服务的使用，取代任何先前或同期的协议，通信和提案您和我们之间的口头或书面形式（包括但不限于任何先前版本的服务条款）。
						</br>对本服务条款的解释中的任何含糊之处不得解释为起草方
						</br>第18节 - 管辖法律
						</br>这些服务条款以及我们为您提供服务的任何单独协议均中国大陆法律管辖并按其解释。
						</br>第19节 - 服务条款的变更
						</br>您可以随时在此页面查看最新版本的服务条款。
						</br>我们保留自行决定通过向我们的网站发布更新和更改来更新，更改或替换这些服务条款的任何部分的权利。您有责任定期查看我们的网站以了解更改。您在发布对这些服务条款的任何更改后继续使用或访问我们的网站或服务即表示接受这些更改
						</br>第20节 - 联系信息
						</br>有关服务条款的问题，请发送电子邮件至shengbin@linksfield.net
						</br>客户只需支付一次运费（包括退货）; 不退还产品需要向消费者收取费用。
					</p>
					
				</div>
			</div>
			<div v-else>
				<h4>TERMS OF SERVICE</h4>
				<div class="textContent">
					<h5>OVERVIEW</h5>
					<P>
						This website (wx.linksfield.net ) is operated by Links Field . Throughout the site, the terms “we”, “us” and “our” refer to Links Field. Links Field offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
						</br>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
						</br>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
						</br>SECTION 1 - ONLINE STORE TERMS
						</br>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your country of residence, or that you are the age of majority in your country of residence and you have given us your consent to allow any of your minor dependents to use this site.
						</br>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
						</br>You must not transmit any worms or viruses or any code of a destructive nature.
						</br>A breach or violation of any of the Terms will result in an immediate termination of your Services.
						</br>SECTION 2 - GENERAL CONDITIONS
						</br>We reserve the right to refuse service to anyone for any reason at any time.
						</br>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
						</br>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
						</br>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
						</br>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
						</br>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
						</br>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.
						</br>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
						</br>Prices for our products are subject to change without notice.
						</br>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
						</br>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
						</br>SECTION 5 - PRODUCTS OR SERVICES (if applicable)
						</br>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
						</br>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
						</br>We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.
						</br>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.
						</br>SECTION 5 - PRODUCTS OR SERVICES (if applicable)
						</br>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
						</br>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
						</br>We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.
						</br>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.
						</br>SECTION 7 - OPTIONAL TOOLS
						</br>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.
						</br>You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.
						</br>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).
						</br>We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.
						</br>SECTION 8 - THIRD-PARTY LINKS
						</br>Certain content, products and services available via our Service may include materials from third-parties.
						</br>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.
						</br>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.
						</br>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
						</br>If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.
						</br>We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.
						</br>You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.
						</br>SECTION 10 - PERSONAL INFORMATION
						</br>Your submission of personal information through the store is governed by our Privacy Policy.
						</br>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS
						</br>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).
						</br>We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.
						</br>SECTION 12 - PROHIBITED USES
						</br>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international or UK’s regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.
						</br>SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
						</br>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.
						</br>We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
						</br>You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
						</br>You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
						</br>In no case shall we, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.
						</br>SECTION 14 - INDEMNIFICATION
						</br>You agree to indemnify, defend and hold harmless us and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
						</br>SECTION 15 - SEVERABILITY
						</br>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
						</br>SECTION 16 - TERMINATION
						</br>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
						</br>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
						</br>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).
						</br>SECTION 17 - ENTIRE AGREEMENT
						</br>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.
						</br>These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).
						</br>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
						</br>SECTION 18 - GOVERNING LAW
						</br>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of China.
						</br>SECTION 19 - CHANGES TO TERMS OF SERVICE
						</br>You can review the most current version of the Terms of Service at any time at this page.
						</br>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
						</br>SECTION 20 - CONTACT INFORMATION
						</br>Questions about the Terms of Service should be sent to us at shengbin@linksfield.net
						</br>Customers will only be charged once for shipping costs (this includes returns); No-restocking to be charged to the consumers for the return of the product
					</P>
				</div>
			</div>
		</div>

		<div class="btns">
			<router-link class="done" :to="'/'+backRouoter">{{$t("message.back")}}</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'helpText',
		data() {
			return {
				langCn: this.$store.state.langType == 'cn' ? true : false,
			}
		},
		props: {
			helpFlag: {
				type: Number,
				default: 1
			},
			backRouoter: {
				type:String,
				default:''
			}
		}
	}
</script>

<style scoped>
	h4 {
		margin: 30px 0 20px;
		font-size: 0.8rem;
		text-align: center;
	}
	
	.textContent {
		font-size: 0.7rem;
		color: #3E3A39;
		line-height: 24px;
		padding: 0 1.2rem 82px;
	}
	
	.textContent h5{
		font-weight: bold;
		margin:8px 0 3px;
	}
	
	.btns {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 15px;
		text-align: center;
		background: #fff;
	}
</style>