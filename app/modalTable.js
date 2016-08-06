var styles = require('./style');
var React = require('react');

function modalTable(){
	return (
		<div>        
      <span style={styles.modalLink}> http://api-origin-scs-prod.kohls.com/openapi-rest-web/v1/inventory/sku</span>
        <table style={styles.modalTable}>
          <tbody>
            <tr style={styles.tableRow}>
              <td style={styles.tableData}> Request String: </td>
              <td><form><input style={styles.textBox}/></form></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableData}> Response String: </td>
              <td><form> <input style={styles.textBox}/> </form></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableData}> Status Code: </td>
              <td style={styles.tableData}> <span style={{}}>200</span></td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableData}> Response time, ms: </td>
              <td style={styles.tableData}> 50 </td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableData}> Request status: </td>
              <td style={styles.tableData}> OK </td>
            </tr>
            </tbody>
        </table>
    </div>
	)
};

module.exports = modalTable;