class CreateDinocats < ActiveRecord::Migration[6.1]
  def change
    create_table :dinocats do |t|
      t.string :name
      t.string :height
      t.boolean :scary?

      t.timestamps
    end
  end
end
