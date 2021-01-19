import React from 'react';
import {
  Text, StyleSheet, View, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  cita: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textoEliminar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Cita = ({ item, eliminarPaciente }) => {
  const dialogoEliminar = (id) => {
    // console.log(`eliminado... ${id}`);
    eliminarPaciente(id);
  };
  // const { cita } = styles;
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.texto}>{item.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>Propietario:</Text>
        <Text style={styles.texto}>{item.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>Síntomas:</Text>
        <Text style={styles.texto}>{item.sintomas}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => dialogoEliminar(item.id)}
          style={styles.btnEliminar}
        >
          <Text style={styles.textoEliminar}>Eliminar &times; </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

Cita.propTypes = {
  item: PropTypes.exact({
    sintomas: PropTypes.string,
    paciente: PropTypes.string,
    propietario: PropTypes.string,
    id: PropTypes.string.isRequired,
  }),
  eliminarPaciente: PropTypes.func.isRequired,
};

Cita.defaultProps = {
  item: {
    sintomas: '',
  },
};

export default Cita;
