import {connect} from 'react-redux'
import AdList from '../components/AdList'

import {compose } from 'redux'
import { firestoreConnect} from 'react-redux-firebase'
//import {displayAds} from '../actions/index'

const mapStateToProps = state => ({
    ads: state.ads
})


export default connect(mapStateToProps)(AdList);