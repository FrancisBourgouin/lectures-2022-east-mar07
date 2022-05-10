class DinocatController < ApplicationController

  def index
    @dinocat = Dinocat.all
  end


end
