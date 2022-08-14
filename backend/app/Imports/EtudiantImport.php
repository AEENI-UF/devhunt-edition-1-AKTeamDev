<?php

namespace App\Imports;

use App\Models\Etudiant;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class EtudiantImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $etudiants = new Etudiant([
            "et_num" => $row['et_num'],
            "et_nom" => $row['et_nom'],
            "et_prenom" => $row['et_prenom'],
            "et_parcours" => $row['et_parcours'],
            "et_niveau" => $row['et_niveau'],
        ]);

        DB::table('etudiants')->where('et_num', $etudiants->et_num)->delete();

        return $etudiants;
    }
}
