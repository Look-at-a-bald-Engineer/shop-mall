<template>
  <div>
    <van-nav-bar title="收货地址" left-text="返回"left-arrow @click-left="onClickLeft"/>
    <div>
      <div v-for="(item,index) in getListAction" :key="index" class="box">
        <div style="float: left;width: 60px;text-align: center">
        <p>{{item.name}}</p>
        <van-tag plain type="primary" v-show="item.is_default == 1">默认地址</van-tag>
        </div>
        <div style="overflow: hidden;margin-left: 20px;padding-left: 10px">
          <div style="float: left">
            <p>{{item.mobile}}</p>
            <p>{{item.address}}{{item.address_detail}}</p>
          </div>
          <van-icon name="edit" size="25" color="#c6c6c6" style="border:1px solid #c6c6c6;border-radius: 3px;float: right" @click="editAddress(item)"/>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :closeable='true' :style="{ height: '100%' }">
      <p style="text-align: center;padding: 10px 0px;font-size: 16px;">编辑收货信息</p>
      <van-cell-group :closeable='true'>
        <van-field v-model="editValue.name" label="姓名" placeholder="请输入用户名" />
        <van-field v-model="editValue.mobile" label="联系方式" placeholder="请输入用户名" />
        <van-field v-model="editValue.address" label="地址" placeholder="请输入用户名" />
        <van-cell center title="是否为默认地址">
          <template #right-icon>
            <van-switch v-model="checked" size="24" />
          </template>
        </van-cell>
      </van-cell-group>
      <van-button type="danger" @click="saveAddress" :round="true" style="position: fixed;bottom: 0px;width: 9rem;margin: 0px 0.5rem">保存编辑</van-button>
    </van-popup>
  </div>
</template>

<script>
  import {getListAction , saveAction} from '../api/api'
  export default {
    data(){
      return{
        getListAction: '',
        show: false,
        editValue: '',
        checked: 0,
        params: {
          openId: 'oQmbb4sNZdxaUQZ0sfYgvtOP2S7c',
          id: '',
          address: '',
          addressId: '',
          userName: '',
          telNumber: ''
        },
      }
    },
    created() {
      this.getListActions();
    },
    methods:{
      getListActions(){
        getListAction(this.params).then(res => {
          this.getListAction = res.data.data;
        })
      },
      onClickLeft(){
        this.$router.go(-1);
      },
      // 编辑地址
      editAddress(item){
        this.show = true;
        this.editValue = item;
      },
      close(){
        this.show = false;
        this.getListActions();
      },
      //保存编辑
      saveAddress(){
        this.show = false;
        this.params.id = this.editValue.id;
        this.params.address = this.editValue.address;
        this.params.addressId = this.editValue.id;
        this.params.userName = this.editValue.name;
        this.params.telNumber = this.editValue.mobile;
        this.params.detailadress = this.editValue.address_detail;
        if (this.checked == 0) {
          this.params.checked = false;
        }else if(this.checked == 1) {
          this.params.checked = true;
        }
        saveAction(this.params);
        this.getListActions();
        this.checked = 0;
      },
    }
  }
</script>

<style scoped>
.box{
  margin:5px 10px;
  padding: 10px 10px;
  background: #ffffff;
}
</style>
