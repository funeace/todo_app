import firebase from "@/plugins/firebase"
import axios from "@/plugins/axios"

const authCheck = ({store, redirect}) => {
  firebase.auth().onAuthStateChanged(async user => {
    if(user){
      // awaitは処理が終わるまでまつ。railsアプリケーションからユーザ情報を取得
      const{data} = await axios.get(`/v1/users?uid=${user.uid}`)
      store.commit("setUser", data)
      console.log("ログインしているユーザ", data)
    }else {
      store.commit("setUser", null)
    }
  })
}

export default authCheck