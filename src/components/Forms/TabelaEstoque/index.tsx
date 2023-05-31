import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { Table, Row, Rows, TableWrapper, Cell } from 'react-native-table-component';

/* const data = [
    {"title": "Teste - titulo do livro",
    "price": "teste R$10,00",
    "author": "teste autor",
    "editor": "teste editora",
    "pages": "teste pages",
    "conservationState": "teste conservação"},

    {"title": "Teste - titulo do livro2",
    "price": "teste R$20,00",
    "author": "teste autor2",
    "editor": "teste editora2",
    "pages": "teste pages2",
    "conservationState": "teste conservação2"}
  ]; */

const data = [{"title" : "Trono de vidro - Vol 1"}, {"title" : "Livro 02"}];

var tableHead = [];
var tableData = [];

//Popula cabeçalho da tabela com valores do banco de dados
//tableHead = Object.keys(data[0]);

//Popula cabeçalho da tabela manualmente
//tableHead = ["Título", "Preço", "Autor(a)", "Editora", "Páginas", "Estado de Conservação"]
tableHead = ["Título"];
tableHead.push("Detalhes");

//Popula array tableData com dados da tabela
data.forEach(data => tableData.push(Object.values(data)));

//Populando array com mais um elemento que será substituído pelo botão
tableData = tableData.map(object => {
  return [...object, "btn" ]
})

export default class TabelaEstoque extends Component<{}, { [key: string]: any}> {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: tableHead,
      tableData: tableData
    }
    
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index}`);
  }

  render() {
    const state = this.state;

    // Necessita da adicionar rota para a pagina de detalhe específica do end-point
    const elementBtnDetalhe = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Detalhes</Text>
        </View>
      </TouchableOpacity>
    );

  return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map( (rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 1 ? elementBtnDetalhe(cellData, index) : cellData} textStyle={styles.text}/>
                  )) 
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}


//Falta ainda formatar
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});

