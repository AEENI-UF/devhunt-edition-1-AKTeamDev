<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Etudiant;
use App\Imports\EtudiantImport;
use APP\Http\Controllers\EtudiantController;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\FromCollection;
class EtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
            
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    
    /*** Ajout Etudiant ***/
    public function store(Request $request)
    {
        $etudiant = new Etudiant();       
        $etudiant->et_num = $request->et_num;
        $etudiant->et_nom = $request->et_nom;
        $etudiant->et_prenom = $request->et_prenom;
        $etudiant->et_parcours = $request->et_parcours;
        $etudiant->et_niveau = $request->et_niveau;
        $etudiant->save();
        return response()->json($etudiant,201);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    /*** Afficher tous les listes des etudiants ***/
    public function show()
    {
        $listeetudiant = DB::table('etudiants')->get();
        return  $listeetudiant;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    /*** lister etudiant par id ***/
    public function edit($id)
    {
        $etudiant = DB::table('etudiants')->where('id',$id)->first();
        return $etudiant;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    /***Supprimer étudiant ***/
    public function destroy($id)
    {
        DB::table('etudiants')->where('id',$id)->delete();
        $res = "{ 'status':'Ok', 'message':'Suppression avec succès'}";
        return json_encode($res);
    }

    public function importerExcelView(){
        
        //chemin backend
        return view('Excel.EtudiantExcel');
    }

    public function import(Request $request){
        //validats
        $this->validate($request,[
            'file'=>'required|mimes:csv,xls,xlsx'
        ]);
        Excel::import(new EtudiantImport, $request->file);
        return 'Etudiant Importer Successfully';
    }


}
