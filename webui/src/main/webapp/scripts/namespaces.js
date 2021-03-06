/*
 * Copyright (c) 2013 EMBL - European Bioinformatics Institute
 * Licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

function buildNamespaces(year, minYear) {
	var namespaces = {
	    rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
	    rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
	    xsd: 'http://www.w3.org/2001/XMLSchema#',
	    owl: 'http://www.w3.org/2002/07/owl#',
	    meshv: 'http://id.nlm.nih.gov/mesh/vocab#',
	    mesh: 'http://id.nlm.nih.gov/mesh/',
	};

	/* Enhancement by NLM - we include the last 3 years of MeSH as prefixes */
	while (year >= minYear) {
		var prefix = 'mesh'+year;
		var expansion = 'http://id.nlm.nih.gov/mesh/'+year+'/';
		namespaces[prefix] = expansion;
		year = year - 1;
	}
	return namespaces;
}

if (typeof NLM === 'undefined') {
    var NLM = {};
}
var lodeNamespacePrefixes = buildNamespaces(NLM.meshYear, NLM.minYear);
