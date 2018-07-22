import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {
  constructor(public http: HttpClient) {
    console.log("Hello PostProvider Provider");
  }

  /**
   * @returns {Array} Returns an array of posts.
   */
  getPosts() {
    return this.http.get("http://backend.agristudy.com/wp-json/wp/v2/posts?_embed");
  }

  /**
   *
   * @param id
   * @description returns the post from a given post id.
   * @returns {Object}
   */
  getPostById(id: number) {
    return this.http.get(`http://backend.agristudy.com/wp-json/wp/v2/posts/${id}?_embed`);
  }
}
