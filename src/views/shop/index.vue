<template>
  <div>
    <div id="main" style="width: 600px;height:700px;"></div>
  </div>
</template>

<style scoped>
</style>

<script>
import echarts from "echarts";
import { getInfo } from "../../api/api";
export default {
  data() {
    return {
    };
  },
  methods: {
    async handelGetIfo() {
      const { data } = await getInfo();
      let arrName = []; // 带有重复的名字
      var arr = data.msg.rows;
      // console.log(arr.length);

      // console.log(arr);
      // 判断状态
      var initArr = [];
      for(var i = 0; i < arr.length; i++) {
        if('INIT' === arr[i].status) {
          initArr.push(arr.splice(i, 1)[0])
        }
      }
      console.log(initArr);

      for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < arr[i].item.length; k++) {
          // console.log(arr[i].item[k].spu_name)
          arrName.push(arr[i].item[k].spu_name);
        }
      }
      let array = Array.from(new Set(arrName)); // 去重的名字
      // console.log(array);

      let arr3 = [];  // 数据
      for (var i = 0; i < array.length; i++) {
        var index = 0;
        for (var k = 0; k < arrName.length; k++) {
          // console.log(k);
          if (array[i] === arrName[k]) {
            index++;
          }
          if (k === arrName.length - 1) {
            arr3.push(index);
          }
        }
      }


      arr = initArr;
      let arrName1 = [];
      for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < arr[i].item.length; k++) {
          // console.log(arr[i].item[k].spu_name)
          arrName1.push(arr[i].item[k].spu_name);
        }
      }
      let array1 = Array.from(new Set(arrName1)); // 去重的名字
      let arr4 = [];  // 数据
      for (var i = 0; i < array1.length; i++) {
        var index = 0;
        for (var k = 0; k < arrName.length; k++) {
          // console.log(k);
          if (array1[i] === arrName[k]) {
            index++;
          }
          if (k === arrName.length - 1) {
            arr4.push(index);
          }
        }
      }


      var myChart = echarts.init(document.getElementById("main"));
      var option = {
        title: {
          text: "某天的订单",
          subtext: "数据来自本地"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["init", "all"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: array
        },
        series: [
          {
            name: "all",
            type: "bar",
            data: arr3
          },
          {
            name: "init",
            type: "bar",
            data: arr4
          },
        ]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.handelGetIfo();
  }
};
</script>

