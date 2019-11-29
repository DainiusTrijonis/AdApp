import {connect} from 'react-redux'
import AdList from '../components/AdList'


const mapStateToProps = state => ({
    ads: state.ads
})


export default connect(mapStateToProps)(AdList);