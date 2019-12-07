import {connect} from 'react-redux'

//components
import AdList from '../components/AdList'

//actions to dispatch to component
import {delAd} from '../actions/index'
import {onChangeAd} from '../actions/index'
const mapStateToProps = state => ({
    ads: state.ads
})
const mapDispatchToProps = dispatch => ({
    delAd: id => dispatch(delAd(id)),
    onChangeAd: (text,price,ad) => dispatch(onChangeAd(text,price,ad))
})

 
export default connect(mapStateToProps, mapDispatchToProps) (AdList);