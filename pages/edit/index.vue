<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-01 17:35:01
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-06 23:49:36
-->
<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages" v-if="errors">
            <div v-for="(value, field) in errors" :key="field" class="ng-scope">
              <li
                v-for="error in value"
                :key="error"
                class="ng-binding ng-scope"
              >
                {{ field }} {{ error }}
              </li>
            </div>
          </ul>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  required
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="tagstr"
                  v-on:keyup.enter="enterTag"
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                />
                <div class="tag-list">
                  <span
                    v-for="(tag, index) in article.tagList"
                    :key="index"
                    class="tag-default tag-pill"
                  >
                    <i class="ion-close-round" @click="removeTag(index)"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                @click="submitArticle"
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArticle } from "@/api/editor";

export default {
  name: "EditorIndex",
  middleware: "authenticated",
  data() {
    return {
      tagstr: "",
      errors: null,
      article: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
    };
  },
  methods: {
    enterTag() {
      this.article.tagList.push(this.tagstr);
      this.tagstr = "";
    },
    removeTag(index) {
      this.article.tagList.splice(index, 1);
    },
    async submitArticle() {
      try {
        const { data } = await createArticle(this.article);
        this.$router.push(`/article/${data.article.slug}`);
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    },
  },
};
</script>

<style scoped>
</style>

