import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const data = [
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
  ];


var tableHead = [];
var tableData = [];

//Popula cabeçalho da tabela com valores do banco de dados
//tableHead = Object.keys(data[0]);

//Popula cabeçalho da tabela manualmente
tableHead = ["Título", "Preço", "Autor(a)", "Editora", "Páginas", "Estado de Conservação"]

//Popula array com dados da tabela
data.forEach(data => tableData.push(Object.values(data)));


export default class TableEstoque extends Component<{}, { [key: string]: any}> {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: tableHead,
      tableData: tableData
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

