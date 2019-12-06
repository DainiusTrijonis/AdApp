import {connect} from 'react-redux'
import AdList from '../components/AdList'

import {delAd} from '../actions/index'

const mapStateToProps = state => ({
    ads: state.ads
})
const mapDispatchToProps = dispatch => ({
    delAd: id => dispatch(delAd(id))
})

export default connect(mapStateToProps, mapDispatchToProps) (AdList);