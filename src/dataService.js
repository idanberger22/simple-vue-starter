import Axios from 'axios'

export const dataService = {
    getData
}  

async function getData(){
    const {data} = await Axios.get('https://datasource.kapsarc.org/api/records/1.0/search/?dataset=emissions_agriculture_energy_e_all_data_norm')
    return data.records.map(record => record.fields)
}