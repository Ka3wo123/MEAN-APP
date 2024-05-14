import {Injectable} from '@angular/core';

const posts = [
 {
   "title": "Post 1",
   "text": "Baza danych przechowuje informacje w strukturalny sposób.",
   "image": "https://zeenea.com/wp-content/uploads/2023/01/databases-zeenea.jpg.webp",
   "id": "64549b5362f53f833c89f6ab"
 },
 {
   "title": "Post 2",
   "text": "Baza danych przechowuje informacje w strukturalny sposób.",
   "image": "https://zeenea.com/wp-content/uploads/2023/01/databases-zeenea.jpg.webp",
   "id": "64549b6062f53f833c89f6ac"
 },
 {
   "title": "Post 3",
   "text": "Sieć komputerowa umożliwia przesyłanie danych między urządzeniami.",
   "image": "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
   "id": "64549b6362f53f833c89f6ad"
 },
 {
   "title": "Post 4",
   "text": "Cyberbezpieczeństwo jest ważne w dzisiejszej erze cyfrowej.",
   "image": "https://cdn.elearningindustry.com/wp-content/uploads/2022/12/shutterstock_2037142181.jpg",
   "id": "64549b6662f53f833c89f6ae"
 },
 {
   "title": "Post 5",
   "text": "Algorytmy są podstawą rozwiązywania problemów informatycznych.",
   "image": "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F5242668e-93e9-11e8-95f8-8640db9060a7?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1",
   "id": "64549b6962f53f833c89f6af"
 },
 {
   "title": "Post 6",
   "text": "Chmura obliczeniowa umożliwia przechowywanie danych online.",
   "image": "https://images.idgesg.net/images/idge/imported/imageapi/2022/06/21/16/cso_nw_cloud_computing_cloud_network_circuits_by_denis_isakov_gettyimages-966932508_2400x1600-100814451-large-100929305-large.jpg?auto=webp&quality=85,70",
   "id": "64549b6d62f53f833c89f6b0"
 },
 {
   "title": "Post 7",
   "text": "Aplikacja mobilna ułatwia korzystanie z usług na smartfonie.",
   "image": "https://inventionland.com/wp/wp-content/uploads/2018/12/inventionland-flying-apps-1.jpg",
   "id": "64549b7062f53f833c89f6b1"
 },
 {
   "title": "Post 8",
   "text": "Sztuczna inteligencja rewolucjonizuje wiele dziedzin, w tym medycynę i transport.",
   "image": "https://assets.techrepublic.com/uploads/2023/07/tr71123-ai-art.jpeg",
   "id": "64549b7362f53f833c89f6b2"
 },
 {
   "title": "Post 9",
   "text": "Programowanie to sztuka tworzenia oprogramowania.",
   "image": "https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/12/tes_gen_blog_code7-1-800x412.jpg",
   "id": "64549b7762f53f833c89f6b3"
 },
 {
   "title": "Post 10",
   "text": "Kryptografia zajmuje się zabezpieczaniem danych przed nieautoryzowanym dostępem.",
   "image": "https://www.fortinet.com/content/fortinet-com/zh_tw/resources/cyberglossary/what-is-cryptography/_jcr_content/par/c05_container_copy_c/par/c28_image_copy_copy.img.jpg/1701209624270.jpg",
   "id": "645e329db1979e2e900a94d5"
 }
]


@Injectable({
 providedIn: 'root'
})
export class DataService {

 constructor() {
 }

 public getAll() {
   return posts;
 }
}

