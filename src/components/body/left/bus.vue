<!--旅行社 列表 -->
<template>
  <div>
    <div class="ng-list-title">
      <p class="ng-list-title-main">大巴车时刻表</p>
      <p class="ng-list-title-sub">最新时刻表</p>
    </div>
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '出发时间',
          key: 'startTime',
          sortable: true
        },
        {
          title: '出发车站',
          key: 'startStation'
        },
        {
          title: '到达城市',
          key: 'desination'
        },
        {
          title: '车型',
          key: 'busType'
        },
        {
          title: '车次',
          key: 'busId'
        },
        {
          title: '票价',
          key: 'price'
        }
      ],
      data1: [
        {
          startTime: '08:20',
          startStation: '合肥南站客运站',
          desination: '宁国客运站',
          busType: '中型高一座席(安凯)',
          busId: '218d5',
          price: 65
        },
        {
          startTime: '09:00',
          startStation: '南京中华门客运站',
          desination: '宁国客运站',
          busType: '中型高一座席(安凯)',
          busId: 'nj232',
          price: 130
        },
        {
          startTime: '10:20',
          startStation: '宣城汽车站',
          desination: '宁国客运站',
          busType: '中型高一座席(安凯)',
          busId: '89sdh',
          price: 30
        },
        {
          startTime: '10:20',
          startStation: '宣城汽车站',
          desination: '宁国客运站',
          busType: '中型高一座席(安凯)',
          busId: '89sdh',
          price: 30
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
