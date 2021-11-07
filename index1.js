const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const header = $('.header_title')
const menubar = $('.menu_bar')
const popularNew = $('.popularNews_banner')
const popularTag = $('.tag_list')
const latestNew = $('.latestNew')
const popularNew_Top = $('.popularNew_top')
const footers = $('.footer_content-info')
            var slideIndex = 1;
            showDivs(slideIndex);
            function plusDivs(n) {
            showDivs(slideIndex += n);
            }

            function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("slide_image");
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
            }
            x[slideIndex-1].style.display = "block";  
            }


const web = {
    headers:{
        logoTitle:'NAL MEDIA' ,
        logoContent:'ベトナムオフショア開発にまつわる情報を提供します'
    },
    menuBar: [ 'オフショア開発', 'NALブログ', 'ベトナム情報', 'お問い合わせ'] ,
    newHost: [
        
        { 
            id: 1,
            title: 'スクラムチェックリスト',
            content: 'スクラムマスターになることを目指しているあなた、またはプロのスクラムマスターになるための最初の一歩を踏み出しているあなたも、NALのSEのTran Duy Truongによる以下の記事でスクラムマストターが何をすべきか、仕事の概要を説明られます。',
            category_name: 'HOT NEWS',
            alt:'Ảnh 1',
            image: './img/1.jpg',
           
        },
        {
            id: 2,
            title: '日本とベトナム オフショア開発の課題',
            content:' 現在ベトナムと日本は政治経済共に良好な関係を築いており、ベトナム オフショア 会社から...',
            date: 'October 27, 2020',
            author: 'admin',
            category_name: 'TOP VIEWED',
            alt:'Ảnh 2',
            image: './img/2.jpg',

        },
        {
            id: 3,
            title: 'ベトナム オフショア 失敗の原因',
            content: 'オフショア市場の魅力を求め、多くのテクノロジー企業がソフトウェアのアウトソーシングに目...',
            date:' October 14, 2020',
            author: 'admin',
            category_name: 'TOP VIEWED',
            alt:'Ảnh 3',
            image: './img/3.jpg'
        }
        ],
        latestNew:  [
            { 
                id: 4,
                title:' 新型コロナウイルス時代におけるベトナム企業の連携',
                content: 'Covid-19の経済全体への影響に直面し、最大手民間企業500社は売上を増加させる方法を相互に模索した。',
                date: 'November 18, 2020',
                author: 'admin',
                category_name: 'ベトナム情報',
                alt:"Ảnh 4",
                image: './img/4.jpg',
                
            },
            {
                id: 5,
                title: 'Java言語のメリットとデメリット',
                content: 'Javaがもたらすメリットにより、学習して使用する人々の数は日々増加しています。 ただし、言語がどれほど強力であっても、特定の制限があり、Javaも例外ではありません。',
                date: 'November 17, 2020',
                author: 'admin',
                category_name: 'オフショア開発',
                alt:'Ảnh 5',
                image: './img/5.jpg',
               
            },
            {
                id: 6,
                title: 'Dockerfileについて',
                content: 'Linux、特にDockerにアプローチしている場合は、この記事が役に立つと思います。 この記事では、NALのSE Nguyen NgocDucがDockfileの概要を説明します。',
                date: 'November 16, 2020',
                author: 'admin',
                category_name: 'NALブログ',
                alt:'Ảnh 6',
                image: './img/6.jpg'
            },
            { 
                id: 7,
                title: 'ベトナムのビジネス規制改革',
                content: 'ベトナム政府は2020年から2025年までの事業活動に関する規定の廃止や簡素化の計画を規定した政府決議68号（68/NQ-CP）を公布した。',
                date: 'November 13, 2020',
                author: 'admin',
                category_name: 'ベトナム情報',
                alt:'Ảnh 7',
                image: './img/7.jpg'
            },
            {
                id: 8,
                title: 'ベトナム・日本ICTウィーク2020',
                content: 'Japan ICTウィークは、今年で14年目を迎え、コロナウイルスの影響のため、オンラインの形式で11/9から11/13までの1週間、「ニューノーマル時代の日越ICT協力」というテーマで行われる。',
                date: 'November 11, 2020',
                author: 'admin',
                category_name: 'NALブログ',
                alt:'Ảnh 8',
                image: './img/8.jpg'
            },
            { 
                id: 9,
                title: 'スクラムにおけるスクラムマスターの役割',
                content: 'スクラムマスターは、チームのパフォーマンスを向上させるためにスクラムモデルで重要な役割を果たす人物です。 スクラムマスターの役割については、次の記事で詳細を説明します。',
                date: 'November 10, 2020',
                author: 'admin',
                category_name: 'オフショア開発',
                alt:'Ảnh 9',
                image: './img/9.jpg'
            },
            {
                id: 10,
                title: '2020年度　10月までの企業活動統計データー',
                content: '10月と2020年の最初の10ヶ月の企業活動',
                date: 'November 9, 2020',
                author: 'admin',
                category_name: 'ベトナム情報',
                alt:'Ảnh 10',
                image: './img/10.jpg'
            },
            {
                id: 11,
                title: 'ベトナムシステム開発会社NALのエンジニア1日の業務',
                content: '今回は日本の案件をメインとしたベトナムシステム開発会社のNALを事例にして、エンジニアの1日の業務を紹介させていただきます。',
                date: new Date(),
                author: 'admin',
                category_name:' NALブログ',
                alt:'Ảnh 11',
                image: './img/11.jpg'
            },
            { 
                id: 12,
                title: '日本顧客はベトナムオフショア会社に要求するもの',
                content: 　'ベトナムオフショア会社と日本顧客との協力を強化するためには、製品に関連する要求事項を満たすのにベトナムエンジニアは専門知識を継続的に向上すると共に日本の仕事文化に精通する必要がある。',
                date: 'November 5, 2020',
                author: 'admin',
                category_name: 'オフショア開発',
                alt:'Ảnh 12',
                image: './img/12.jpg'
            },
            {
                id: 13,
                title: 'NALが3年連続でベトナムIT会社トップに',
                content:　'ベトナムソフトウェアと情報技術サービス協会により、NALが「A-IoT」分野で【2020年ベトナム企業トップ10社】の一社として正式に選出された。NALは今年でベトナムIT会社トップランキングに3年連続でランクインした。',
                date: 'November 4, 2020',
                author: 'admin',
                category_name: 'NALブログ',
                alt:'Ảnh 13',
                image: './img/13.jpg'
            }
            ],
            popularNews: [
                   
                {
                    id: 14,
                    title: 'ベトナム オフショア開発に関する問題解答',
                    category_name: 'オフショア開発',
                    alt:'Ảnh 14',
                    image: './img/14.jpg'
                },
                {
                    id: 15,
                    title: '2020年 情報技術産業の動向',
                    category_name: 'オフショア開発',
                    alt:'Ảnh 15',
                    image: './img/15.jpg'
                },
                {
                    id: 16,
                    title: 'ベトナム オフショア 会社を選ぶ７つの基準',
                    category_name: 'オフショア開発',
                    alt:'Ảnh 16',
                    image: './img/16.jpg'
                },
                {
                    id: 17,
                    title: 'ベトナム観光への情報技術適用',
                    category_name: 'ベトナム情報',
                    alt:'Ảnh 17',
                    image: './img/17.jpg'
                },
                {
                    id: 18,
                    title: 'ベトナム オフショア 会社への選抜 メリットおよびデメリット',
                    category_name: 'オフショア開発',
                    alt:'Ảnh 18',
                    image: './img/18.jpg'
                },
                ],
                
                tag: [
                {tag_1:  'ベトナム システム開発 (19 Post)'
                },
                {tag_1: 'ベトナム　オフショア (17 Post)'
                },
                {tag_1: 'ベトナムIT会社 (17 Post)'
                },
                {tag_1: 'ベトナムシステム開発 (15 Post)'
                },
                {tag_1: 'ベトナムオフショア (12 Post)'
                }
                ],
                banner: [
                    {image: './img/banner-1.jpg',
                    alt:'banner_1',
                        },
                    {image:'./img/banner-2.jpg',
                    alt:'banner_2',
                    },
                    {image: './img/banner-3.jpg',
                    alt:'banner_3',
                    }
                    ],
                    
                 footer: {
                    logo_image: './img/logo-NAL.jpg',
                    
                    title: 'NAL MEDIA ベトナムオフショア開発にまつわる情報を提供します',
                    content: 'このサイトは、ベトナムにおけるオフショア開発の状況、ベトナムと日本の協力関係、およびテクノロジーに関する最新のニュースを更新し、NALの人々とお客様のストーリーを投稿しております。',
                    address: '住所：3F, 84 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam',
                    phone: '電話番号：(+84)243-787-8654',
                    email: 'メールアドレス：info@nal.vn'
                    
                    },                                                
                  render: function(){
                      const {headers} = web;
                      const {footer} = web;
                      const headerElemt = `
                        
                      <h1 class= "header_logo-titel">${headers.logoTitle}</h1>
                      <p class= "header_logo-content">${headers.logoContent}</p>
                      
                      `;                 
                   header.innerHTML = headerElemt;
                    const menu = this.menuBar.map((menu_bar,index) =>{
                        return`
                        <ul class="nav justify-content-center">
                        <li class="nav-item"><a href="">${menu_bar} </a></li>
                        </ul>
                        `
                    })
                    menubar.innerHTML = menu.join('');
                    const lates = this.latestNew.map((lateNew,index) =>{
                        return `
                    <a class="latesNew_content" href="#">
                        <div class="latestNew-img">
                        <img src="${lateNew.image}" alt="${lateNew.alt}">
                        </div>
                        <div class="latesNew-content-title">                  
                        <span class="categogy_name categogy_name-title ">
                            ${lateNew.category_name}
                        </span>
                         <div class="content_banner">
                             <h4>${lateNew.title}</h4>
                             <h5> ${lateNew.date}, by ${lateNew.author}</h5>
                             <p>${lateNew.content} </p>
                         </div>                  
                        </div>
                    </a>
                        `
                    })
                    latestNew.innerHTML = lates.join('');
                    const popularTop = this.popularNews.map((popularNew,index) => {
                        return `
                        <a href="#" class="latesNew_content-link">
                        <div class="popularNews_top-content">
                        <div class="popularNew-img">
                        <img src="${popularNew.image}" alt="${popularNew.alt}" loading="lazy" >
                    </div>
                    <div class="popularNew-content">
                       
                        <span class="popularNew_name-top">
                           ${popularNew.category_name}
                        </span>
                         <div class="popularNew_content-top" >
                             <h5>${popularNew.title}</h5>                            
                            
                         </div>
                    </div>
                    </div>
                    </a>
                        `
                    })
                    popularNew_Top.innerHTML = popularTop.join('');
                    

                    const popularNew1 = this. banner.map((popularNew_banner,index ) =>{
                        return `
                        <div class="popularNews_banner-item">
                            <img src="${popularNew_banner.image}" alt="${popularNew_banner.alt}" loading="lazy">
                        </div>    
                        
                        `
                    })
                    popularNew.innerHTML = popularNew1.join('');
                    const tag = this.tag.map((tags,index) =>{
                        return `
                        <a  href="#" class="title">
                        <i class="fas fa-tags icon-tag"></i>
                            <h5>${tags.tag_1}</h5>
                         </a>
                        `
                    })
                    popularTag.innerHTML = tag.join('');
                    const footer_content = `
                    <h3>${footer. title}</h3>
                    <p>${footer.content}<br>
                    ${footer.address}<br>${footer.phone}<br><a href="#" class="email_footer">${footer.email}</a></p>
                    `
                    footers.innerHTML = footer_content;
                   
                },
            start:function(){
                this.render()
            }  
}
web.start()

                   
console.log('Hello wrold')