import {connect} from 'react-redux'
import AdList from '../components/AdList'
//import {displayAds} from '../actions/index'











const mapStateToProps = state => ({
    ads: state.ads
})


export default connect(mapStateToProps)(AdList);