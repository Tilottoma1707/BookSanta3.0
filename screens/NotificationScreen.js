import firebase from 'firebase';
import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default class NotificationScreen extends React.Component {
    constructor(){
       super()
       this.state={userId:firebase.auth().currentUser.email,allNotifications:[]}
       this.notificationref= null
    }
    componentDidMount() {
        this.getNotifications()
    }
    getNotifications=()=>{
        this.notificationref=db.collection("all_notification")
       .where("notificationStatus","==","unread")
        .where("targetUserId","==",this.state.userId)
        .onSnapshot((Snapshot)=>{
            var allnotifications = []
            Snapshot.docs.map((doc)=>{
                var notification = doc.data();
                notification ["doc_id"] = doc.id
                allnotifications.push(notification)
            })
        this.setState({allNotifications:allnotifications})
        })
    }
render(){
    return(
        <View>
            <Text>Notification</Text>
        </View>)
}}