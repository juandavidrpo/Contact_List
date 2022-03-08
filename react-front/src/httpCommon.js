/**
 * Representa la libreria axios para el consumo de las apis.
 * @version 1.0.0 2002-03-08
 * @author Juan David Rojas Restrepo
 * @since 1.0.0
 */
import axios from 'axios';

/**
 * Se exporta la libreria para su uso.
 */
export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
