<template>
  <el-row>
 
    <el-col :span="24">
      <el-col :span="6" v-for="(imgdata,index) in imglist" :key="index" class="updataimg">
        <img :src="imgdata" alt="这是一张图片" />
      </el-col>
    </el-col>
    <el-col :span="24">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
        multiple
        drag
        :limit="50"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-col>
  </el-row>
</template>

<script>
import { getImg1 } from "@/api/api.js";
// import axios from "axios";
// import axios from "axios";
export default {
  // https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture
  data() {
    return {
      imglist: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
      ],
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    // https://bing.ioliu.cn/v1/rand?type=json
    getImg() {
      console.log("已经进入方法中");
      // var arr = [];
      // for (var i = 0; i < 3; i++) {
      //   //调用接口
      //   getImg1().then(res => {
      //       console.log(res);
      //       arr.push(res.data);
      //       console.log(arr);
      //     })
      //     .catch(err => {
      //       console.loh(err)
      //     });
      // }
      // console.log(arr);
      // this.imglist = arr;
    },



    handlePreview: function(file, fileList) {
      console.log(file, fileList);
    },
    handleRemove(file) {
      console.log(file);
    }
  },
  mounted() {
    this.getImg();
  }
};
</script>

<style>
.el-col-6 {
  box-sizing: border-box;
  padding: 30px;
}
.updataimg img {
  width: 330px;
  height: 250px;
  border-radius: 0;
  
}
.upload-demo {
  float: left;
}
</style>