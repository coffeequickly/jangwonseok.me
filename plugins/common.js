import Vue from 'vue'
import moment from 'moment'

Vue.prototype.moment = function(object){
    return moment(object);
}
