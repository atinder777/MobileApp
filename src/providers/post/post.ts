import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URL_ENGLISH } from "../../consts/main";

@Injectable()
export class PostProvider {
	constructor(public http: HttpClient) {
		console.log("Hello PostProvider Provider");
	}

	/**
	 * @returns {Array} Returns an array of news.
	 */
	getNews() {
		return this.http.get(`${URL_ENGLISH}/posts?categories=3?per_page=100`);
	}

	/**
	 * @returns {Array} Returns an array of redidues/crop.
	 */
	getCrop() {
		return this.http.get(`${URL_ENGLISH}/residue?per_page=100`);
	}

	/**
	 * @returns {Array} Returns an array of news.
	 */
	getActivities() {
		return this.http.get(`${URL_ENGLISH}/posts?categories=17?per_page=100`);
	}

	/**
	 * @returns { Array } Returns an Array of experts.
	 */
	getExperts() {
		return this.http.get(`${URL_ENGLISH}/experts?per_page=100`);
	}

	/**
	 * @returns { Array } Returns an Array of seeds.
	 */
	getSeeds() {
		return this.http.get(`${URL_ENGLISH}/seed?per_page=100`);
	}

	/**
	 * @returns { Array } Returns the about page content.
	 */
	getAbout() {
		return this.http.get(`${URL_ENGLISH}/pages/?slug=about`);
	}

	/**
	 * @returns { Array } Returns the about page content.
	 */
	getContact() {
		return this.http.get(`${URL_ENGLISH}/pages/?slug=contact`);
	}

	/**
	 * @returns { Array } Returns the whatsapp content.
	 */
	getWhatsapp() {
		return this.http.get(`${URL_ENGLISH}/whatsapp?per_page=100`);
	}

	/**
	 * @returns { Array } Returns the Training page content.
	 */
	getPostByCategory(id) {
		return this.http.get(`${URL_ENGLISH}/posts/?categories=${id}`);
	}

	/**
	 *
	 * @param id
	 * @description returns the post from a given post id.
	 * @returns {Object}
	 */
	getPostById(id: number) {
		return this.http.get(`${URL_ENGLISH}/posts/${id}?_embed`);
	}

	/**
	 *
	 * @param id user id
	 * @description returns a user by a given id.
	 */
	getUser(id: number) {
		return this.http.get(`${URL_ENGLISH}/users/${id}`);
	}

	getCategory(id: number) {
		return this.http.get(`${URL_ENGLISH}/categories/${id}`);
	}
}
